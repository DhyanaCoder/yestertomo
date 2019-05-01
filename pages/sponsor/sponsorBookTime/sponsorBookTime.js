// pages/sponsor/sponsorBookTime/sponsorBookTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  startAndend:[
    {
      startDate: "2019-4-01",
      startTime: "12:01",
      endDate: "2019-4-01",
      endTime: "12:01",
    },
    {
      startDate: "2019-4-01",
      startTime: "12:01",
      endDate: "2019-4-01",
      endTime: "12:01",
    },
  ],
    array1: [
      "分钟", "小时", "2小时"
    ],
    array2: [
      1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    ],
    index1:"0",
    index2:"0",

  },
  /**
 * 场次数量选择器触发函数
 */
  bindLCPickerChange(e) {
    this.setData(
      {
        index2: e.detail.value
      }
    )
  },
  /**
 * 时间段选择器触发函数
 */
  bindTSPickerChange(e) {
    this.setData(
      {
        index1: e.detail.value
      }
    )
  },
  /**
   * 增加时间段子项函数
   */
  addItem:function(e){
   var item={
     startDate: "2019-4-01",
     startTime: "12:01",
     endDate: "2019-4-01",
     endTime: "12:01",
   };
   var list=this.data.startAndend;
   list.push(item);
   this.setData({
     'startAndend':this.data.startAndend
   })
  },
  /**
   * 删除时间段子项函数
   */
  deleteItem:function(e){
    var list=this.data.startAndend;
    list.splice(e.currentTarget.dataset.index,1);
    this.setData({
      'startAndend':this.data.startAndend
    })
  },
  /**
    * 开始日期选择器触发函数
    */
  bindStartDateChange(e) {
    var j = 'startAndend[' + e.currentTarget.dataset.index + '].startDate'
    this.setData({
      [j]: e.detail.value
    })
  },
  /**
   * 开始时间选择器触发函数
   */
  bindStartTimeChange(e) {
    console.log("wdqwdqwdqwdqwd");
    var j = 'startAndend['+ e.currentTarget.dataset.index+ '].startTime'
    this.setData(
      {
        
       [j]: e.detail.value
      }
    )
  },
  /**
   * 结束日期选择器触发函数
   */
  bindEndDateChange(e) {
    var j = 'startAndend[' + e.currentTarget.dataset.index + '].endDate'
    this.setData({
      [j]: e.detail.value
    })
  },
  /**
   * 结束时间选择器触发函数
   */
  bindEndTimeChange(e) {
    console.log("wdqwdqwdqwdqwd");
    var j = 'startAndend[' + e.currentTarget.dataset.index + '].endTime'
    this.setData(
      {

        [j]: e.detail.value
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