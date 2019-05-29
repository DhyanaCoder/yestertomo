// pages/person/myjoinedlist/myjoineditem_detail/myjoineditem_detail.js
var util = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_info: {},
    my_obj: []
  },
  preview_img: function () {
    var that = this;
    if (this.data.item_info.img_info) {
      wx.previewImage({
        urls: ["https://yun.hookeii.cn/itemimg/" + that.data.item_info.img_info],
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var data = { 'wd': options.wd }
    wx.showLoading({
      title: '加载中',
    })
    var success = function (res) {
      wx.hideLoading()
      let data  = res.data;
      for (let i = 0; i < data.my_obj.length; i++) {
        let start = data.my_obj[i].startOrd_time;
        let end_time = new Date();
        end_time.setFullYear(start[0]);
        end_time.setMonth(start[1]);
        end_time.setDate(start[2]);
        end_time.setHours(start[3]);
        end_time.setMinutes(start[4] + data.my_obj[i].minOrd_time);
        data.my_obj[i].end_time = [end_time.getFullYear(), end_time.getMonth(), end_time.getDate(), end_time.getHours(), end_time.getMinutes()]
        // data.my_obj[i].end_time = util.end_time(data.my_obj[i].startOrd_time, data.my_obj[i].minOrd_time)
      }
      console.log(data)
      that.setData({
        item_info: data.item,
        my_obj: data.my_obj
      })
    }
    // console.log(data)
    util.getdatabytoken(data, '/iteminfo/Myjoined/detail', null, null, success)
    
  },
  change: function(){
    var data = { 'wd':this.data.item_info.pass_id}
    var that = this;
    var success = function(res){
      wx.hideLoading()
      wx.hideToast()
      wx.showToast({
        title: '取消成功！',
      })
      that.data.item_info.cancel_status = 0;
      that.setData({
        item_info: that.data.item_info
      })
      console.log(that.data.item_info)
    }
    wx.showModal({
      title: '确定要取消预定吗？',
      content: '此操作不可逆',
      success(res){
        if (res.confirm){
          wx.showLoading({
            title: '取消中',
            mask: true
          })
          util.getdatabytoken(data, '/iteminfo/alteriteminfo/Myjoined', null, null, success)
        }
      }
    })
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