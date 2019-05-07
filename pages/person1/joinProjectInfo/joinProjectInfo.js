// pages/person1/joinProjectInfo/joinProjectInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"叶涛相亲大会",
    date:"2022.10.02",
    time:"12.08",
    address:"番禺区公安局",
    introduction:"ytytytyytytytytytytytytytytytytyytytyt",
    imgList: [
      "http://img3.imgtn.bdimg.com/it/u=1377704254,2739513137&fm=26&gp=0.jpg",
      "http://img4.imgtn.bdimg.com/it/u=2175799279,4044345991&fm=26&gp=0.jpg"
    ],
    amount:"200",
    contact: "叶涛",
    contactNumber: "1553232233",
    projectId: "12123",
    InfoList:[
    {
      name:"场次信息",
      startTime:"开始时间",
      endTime:"结束时间",
    },
    {
      name:"一号场",
      startTime:"19:00",
      endTime:"19:00"
    },
    {
      name: "二号场",
      startTime: "19:00",
      endTime: "19:00"
    },

  ]
  },
 /**
  * 
  */
  /**
 * 点击图片放大
 */
  large: function (e) {

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