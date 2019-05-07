// pages/join/projectIntroduction/projectIntroduction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   name:"GDUT",
   introduction:"djkdqwjdjwqjwjndjsjjdjsjsasdjdjsjn",
   contact:"yt",
   contactNumber:"121212122",
   pictures:[
     'http://img4.imgtn.bdimg.com/it/u=3197911274,2872061394&fm=26&gp=0.jpg',
     'http://img0.imgtn.bdimg.com/it/u=2658770292,1972313488&fm=26&gp=0.jpg',
   ]
  },
  /**
   * 放大图片
   */
  large:function(e){
    console.log(e.currentTarget.dataset.index);
    var src = e.currentTarget.dataset.src;//获取data-src
    var array=this.data.pictures;
    var index=e.currentTarget.dataset.index
    console.log(array)
    wx.previewImage({
            current: array[index], // 当前显示图片的http链接
            urls: array,

    })
  }
,
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