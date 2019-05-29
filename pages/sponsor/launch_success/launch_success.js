// pages/sponsor/launch_success/launch_success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_name:'',
    item_address: '',
    pass_id: ''
  },
  copy: function () {
    wx.setClipboardData({
      data: this.data.pass_id,
    })
  },
  backto_index:function(){
    wx.switchTab({
      url: '../../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      item_address: options.item_address,
      item_name: options.item_name,
      pass_id: options.pass_id
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