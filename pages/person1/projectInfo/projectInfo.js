// pages/person1/mySponsor/mySponsor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:"http://img5.imgtn.bdimg.com/it/u=606299440,2971632217&fm=26&gp=0.jpg",
    introduction:"wddwqdddddddddddddddddddddddddddddddddddd",
    date:"2019.5.1",
    time:"11:30~17:30",
    amount:"200",
    address:"番禺公安局",
    contact:"叶涛",
    contactNumber:"1553232233",
    projectId:"12123",
    imgList:[
      "http://img3.imgtn.bdimg.com/it/u=1377704254,2739513137&fm=26&gp=0.jpg",
      "http://img4.imgtn.bdimg.com/it/u=2175799279,4044345991&fm=26&gp=0.jpg"
    ]
  },
 /**
  * 点击图片放大
  */
  large:function(e){

      console.log(e.currentTarget.dataset.index);
      var src = e.currentTarget.dataset.src;//获取data-src
      var array = this.data.imgList;
      var index = e.currentTarget.dataset.index
      console.log(array)
      wx.previewImage({
        current: array[index], // 当前显示图片的http链接
        urls: array,

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