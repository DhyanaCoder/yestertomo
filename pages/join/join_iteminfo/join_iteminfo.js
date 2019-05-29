// pages/join/join_iteminfo/join_iteminfo.js
var util = require('../../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_name: '',
    item_type:null,
    text_info: '',
    img_info: '',
    pass_id: '',
    start_time: [],
    end_time: [],
    contacter: '',
    contacts: '',
    item_address: '',
    lau_time: [],
    obj_data: []
  },
  preview_img: function(){
    var that = this;
    if (this.data.img_info){
      wx.previewImage({
        urls: ["https://yun.hookeii.cn/itemimg/" + that.data.img_info],
      })
    }
  },
  clickFormView: function(event){
    console.log(event.detail);
    let formId = event.detail.formId;
    var success = function(token){
      // 忽略开发者工具里边的formId
      console.log(token)
      if (formId && formId !== 'the formId is a mock one') {
        wx.request({
          method: 'POST',
          url: "https://yun.hookeii.cn/formId" , // 该接口只用来收集formId
          // url: 'http://127.0.0.1:5000/formId',
          data: { token: token, formId: formId }, // 只传了一个formId，因为openid和当前用户通常会事先在后台做一个关联，看具体业务了
          success: function(res){
            console.log(res)
            if (res.data == "tokenError"){
              util.gettoken(success, 1);
            }
          } 
        });
      }
      // }else{
      //   wx.request({
      //     method: 'POST',
      //     // url: "https://yun.hookeii.cn/formId" , // 该接口只用来收集formId
      //     url: 'http://127.0.0.1:5000/formId',
      //     data: { token: token, formId: formId }, // 只传了一个formId，因为openid和当前用户通常会事先在后台做一个关联，看具体业务了
      //     success: function (res) {
      //       console.log(res)
      //       if (res.data.errMsg == "tokenError") {
      //         console.log(123)
      //         util.gettoken(success, 1);
      //       }
      //     }
      
      // 然后可以干其他事了，比如跳转页面，其他业务逻辑 
      // TODO
    }
    util.gettoken(success);

  },
  test:function(){
    console.log(this.data)
  },
  to_chosetime: function(){
    wx.navigateTo({
      url: '../join_choosetime/join_choosetime?obj_data=' + JSON.stringify(this.data.obj_data) + '&item_name=' + this.data.item_name + '&address=' + this.data.item_address,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    // console.log(options.wd) 正常传参
    let that = this;
    wx.showLoading({
      title: '加载中',
    })
    console.log(util.deal_time)
    var success = function(res){
      wx.hideLoading()
      console.log(res)
      console.log(res.data)
      if (res.data){
        that.setData({
          item_name: res.data.item_name,
          item_type: res.data.item_type,
          text_info: res.data.text_info,
          pass_id: res.data.pass_id,
          start_time: util.deal_time(res.data.start_time),
          end_time: util.deal_time(res.data.end_time),
          contacter: res.data.contacter,
          contacts: res.data.contacts,
          item_address: res.data.item_address,
          lau_time: util.deal_time(res.data.lau_time),
          img_info: res.data.img_info,
          obj_data: res.data.obj_data

        })
      }else{
        wx.showToast({
          title: '失败',
          icon: 'none',
          duration: 2000,
          success: function(res){
            wx.navigateBack({
              success: function(){
                wx.hideToast()
                wx.hideLoading()
                wx.showToast({
                  title: '口令错误！',
                  icon: "none",
                  duration:2000
                })
              }
            })
          }
        })
      }

    } 
    util.getiteminfo_bywd('join_page', success, options.wd, null);
    // wx.request({
    //   url: 'http://127.0.0.1:5000/joinInfo',
    //   data:{
    //     wd:options.wd
    //   },
    //   header:{
    //     'chartset': 'utf-8'
    //   },
    //   success(res){
    //     // console.log(res.data) //数据
    //     if (res.data.errNum == 0){
    //       that.setData({
    //         name: res.data.data.item_name,
    //         type: res.data.data.item_type,
    //         pass_id: res.data.data.pass_id,
    //         starttime: res.data.data.start_time,
    //         endtime: res.data.data.end_time,
    //         contacter: res.data.data.contacter,
    //         contacts: res.data.data.contacts,
    //         lau_time: res.data.data.lau_time,
    //         obj_data: res.data.data.obj_data
    //       })
    //     }else if (res.data.errNum == -1){
    //       console.log(res.data.errMsg)
    //     }else{
    //       console.log('server ERROR')
    //     }
    //   }
    // })
    // this.test() //测试能否传参
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