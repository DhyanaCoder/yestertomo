// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  searchbywd: function(e){
   
    wx.navigateTo({
      url: './join_iteminfo/join_iteminfo?wd=' + e.detail.value,
    })
        // for (var i = 0; i < res.data.data.obj_data.length;i++){
        //   console.log(res.data.data.obj_data[i])
        // }
        // console.log('test?data=' + JSON.stringify(res.data.data.obj_data.length))
  },
  to_handbook:function(){
    wx.navigateTo({
      url: '../handbook/handbook?view_id=join',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   * 记得回调获取token
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
    // if (options.wdError){
    //   wx.showToast({
    //     title: '口令错误',
    //     icon: 'none'
    //   })
    // }
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