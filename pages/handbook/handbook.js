// pages/handbook/handbook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: '',
    winHeight: 0,
  },
  to_view: function(view_id){
    // var _id = e.target.dataset.id;
    var _id = view_id;
    this.data.toView = _id;
    // this.$apply();
    this.setData({
      toView: this.data.toView
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sysInfo = wx.getSystemInfoSync();
    var winHeight = sysInfo.windowHeight;
    if (options.view_id){
      var view_id = options.view_id
    }
    this.setData({
      winHeight: winHeight,
      toView: view_id
    })
    console.log(this.data)

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