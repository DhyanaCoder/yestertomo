// pages/sponsor/sponsorQueue/sponsorQueue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  form:[
  {
  name:"项目名称",
  hintContent:"请输入正确的活动名称"
  },
  {
  name:"开始时间",
  hintContent:"2019年4月19日15：38"
  },
  {
  name:"结束时间",
  hintContent:"2019年4月22日15：38"
  },
  {
  name:"排队总时长",
  hintContent:"请输入正确的时长"
  },
  {
  name:"项目名称",
  hintContent:"请输入你的项目名称"
  }
  ],
    date: '2019-04-19',
    time: '12:01',
    index1:'0',
    array1:[
    "分钟","小时","2小时"
    ],
    tempFilePaths: '',
    checkSelection:'false',
  },
  /**
   * 上传图片触发函数
   */
upPic(e){
  var _this = this;
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      _this.setData({
        tempFilePaths: res.tempFilePaths
      })
    }
  })

}
  ,
  /**
   * 时间段选择器触发函数
   */
  bindTSPickerChange(e){
    this.setData(
      {
        index1:e.detail.value
      }
    )
  }
  ,
  /**
   * 日期选择器触发函数
   */
  bindDateChange(e){
  this.setData({
    date:e.detail.value
  })
  },
  /**
   * 时间选择器触发函数
   */
  bindTimeChange(e){
    this.setData(
      {
        time:e.detail.value
      }
    )
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