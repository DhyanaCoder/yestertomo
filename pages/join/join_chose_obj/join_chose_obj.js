// pages/join/join_chose_obj/join_chose_obj.js
var util = require('../../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_name: '',
    address: '',
    objs: [],
    choosed_obj_id: [],
    choosing_obj: 0,
    start_time: [],
    end_timelist: [],
    choosed_index:{}
  },
  choosing: function(e){
    // 有预定对象被选择 预定对象原来是未选择状态
    var objid_ind = this.data.choosed_obj_id.indexOf(e.currentTarget.dataset.obj_id);
    if (objid_ind == -1){
      this.data.choosed_obj_id.push(e.currentTarget.dataset.obj_id);
      this.data.choosed_index[e.currentTarget.dataset.index] = 1;
    }else{ //预定对象原来是被选择了的状态 从列表中删除取消选择
      this.data.choosed_obj_id.splice(objid_ind, 1);
      delete this.data.choosed_index[e.currentTarget.dataset.index]
    }
    this.setData({
      choosed_obj_id: this.data.choosed_obj_id,
      choosed_index: this.data.choosed_index,
      choosing_obj: e.currentTarget.dataset.index
    });

    console.log(e)
    console.log(this.data.choosed_obj_id)
    console.log(this.data.choosed_index)    
  },
  submit: function(){
    var that = this;
    let data = {'objId': this.data.choosed_obj_id}
    var success = function(){ //成功跳转
      console.log('join_success')
      console.log(that.data.item_name)
      wx.navigateTo({
        url: '../join_successpage/join_successpage?item_name=' + that.data.item_name + '&address=' + that.data.address  
      })
    }
    var fail = function(res){
      if (res.errMsg == 'ObjresidueError.'){
        wx.hideToast()
        wx.hideLoading()
        wx.showToast({
          title: '请重新刷新，有预定场地没有剩余位置',
          icon: 'none',
          duration: 2000
        })
      }else{
        console.log(res.errMsg)
      }
    }
    util.getdatabytoken(data, '/joinAcitvity', null, null, success, fail);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.objs))
    var data = JSON.parse(options.objs)
    var end_time = (data) => {
      var timelist = []; 
      for (let i = 0; i < data.obj.length; i++) {
        var time = [data.start_time[0], data.start_time[1] + data.obj[i].minOrd_time]
        if (time[1] >= 60) {
          time = [(time[0] + parseInt(time[1] / 60) < 24) ? (time[0] + parseInt(time[1] / 60)) : (time[0] + parseInt(time[1] / 60) - 24), time[1] % 60]
        } //bug 单次预定时间不能超过24个小时
        timelist[i] = time;
      }
      return timelist;
    };
    console.log(options.item_name)
    this.setData({
      item_name: options.item_name,
      address: options.address,
      objs: data.obj,
      end_timelist: end_time(data) //每个对象的结束时间
    })
    console.log(end_time(data))

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})