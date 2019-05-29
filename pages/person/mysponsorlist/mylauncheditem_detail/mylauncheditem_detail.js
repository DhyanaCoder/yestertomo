// pages/person/mysponsorlist/mylauncheditem_detail/mylauncheditem_detail.js
var util = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_info:{},
    ord_objs: []
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
    var data = JSON.parse(options.data);
    data.item_detail.overed = (options.overed == 'true')?1:0;
    this.setData({
      item_info: data.item_detail,
      ord_objs: data.ord_objects
    })
  },
  copy: function(){
    wx.setClipboardData({
      data: this.data.item_info.pass_id,
    })
  },
  change_page_show: function(e){
    this.data.item_info.page_show = ! this.data.item_info.page_show;
    console.log(this.data.item_info.page_show)
  },
  submit_change: function(){
    var data = { 'wd': this.data.item_info.pass_id, 'page_show_status': this.data.item_info.page_show}
    var success = function(res){
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 2000
      })
    }
    util.getdatabytoken(data, '/iteminfo/alteriteminfo/Mylaunched', null, null, success)
  },
  change: function(res){
    var that = this;
    var data = { 'wd': this.data.item_info.pass_id, 'logic_del_status': 0 }
    var success = function (res) {
      wx.showToast({
        title: '取消成功',
        icon: 'success',
        duration: 2000
      })
      that.data.item_info.logic_del = 0
      that.setData({
        item_info: that.data.item_info
      })
    }
    wx.showModal({
      title: '确定要取消预定吗？',
      content: '此操作不可逆',
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '取消中',
            mask: true
          })
          util.getdatabytoken(data, '/iteminfo/alteriteminfo/Mylaunched', null, null, success)   
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