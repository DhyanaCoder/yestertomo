// pages/sponsor/sponsor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  to_launch_queue: function(e){
    wx.navigateTo({
      url: './launch_queue/launch_queue',
    })
  }, 
  to_launch_book:function(e){
    wx.navigateTo({
      url: './launch_book/launch_book',
    })
  },
  to_handbook:function(){
    wx.navigateTo({
      url: '../handbook/handbook?view_id=launch',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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