// pages/sponsor/sponsorBookTime/sponsorBookTIme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   dateList:[
     {
       month:4,
       day:24,
       classVar: "dateLayout",/**样式变量 按下是dateLayoutPressed 正常是dateLayout */
     },
     {
       month:4,
       day:25,
       classVar: "dateLayoutPressed",/**样式变量 按下是dateLayoutPressed 正常是dateLayout */
     }
   ],
   number:[
    {
      numberValue:"一号"
    },
     {
       numberValue: "二号"
     },
     {
       numberValue: "三号"
     },
     {
       numberValue: "四号"
     },
     {
       numberValue: "五号"
     },
   ],
   four:[{},{},{},{}],
   ProjectName:"项目名称",
    timeSelectionList:[
    {
      timeValue:"8:00~10:00"
    },
    {
      timeValue: "8:00~10:00"
    },
    {
      timeValue: "8:00~10:00"
    },
    {
      timeValue: "8:00~10:00"
    },
    {
      timeValue: "8:00~10:00"
    },
      {
        timeValue: "8:00~10:00"
      },
      {
        timeValue: "8:00~10:00"
      },
      {
        timeValue: "8:00~10:00"
      },
      {
        timeValue: "8:00~10:00"
      },
    ],
    
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

  },
  /**
   * 点击日期
   */
  dateSelectionClick:function(e){
    console.log("wdwqdqwd")
    var i = e.currentTarget.dataset.index;
   var array=this.data.dateList;
   array.forEach((item,index,attr)=>{
    var allItem="dateList["+index+"].classVar";
    this.setData({
      [allItem]:"dateLayout"
    })
    if(index==i){
      var allItem1 = "dateList[" + index + "].classVar";
      this.setData({
        [allItem1]:"dateLayoutPressed"
      })
    }
   })
  }
})