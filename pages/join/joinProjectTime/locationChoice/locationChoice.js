// pages/sponsor/sponsorBookTime/locationChoice/locationChoice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   locationList1:[
     {
     number:"1",
     classState:"location"
     },
     {
       number: "2",
       classState: "location"
     },
     {
       number: "3",
       classState: "location"
     },
     {
       number: "4",
       classState: "location"
     },
     {
       number: "5",
       classState: "location"
     },
     {
       number: "6",
       classState: "location"
     },
     ],
     locationList2:[ {
        number: "7",
        classState: "location"
      },
      {
        number: "8",
        classState: "location"
      },
      {
        number: "9",
        classState: "location"
      },
      {
        number: "10",
        classState: "location"
      },
      {
        number: "11",
        classState: "location"
      },
      {
        number: "12",
        classState: "location"
      },
    ],
  },
  /**
   * 位置触摸选中事件1 1-6
   */
  locationClick1:function(e){
      console.log("wdwqdqwd")
      var i = e.currentTarget.dataset.index;
      var array = this.data.locationList1;
      var array1=this.data.locationList2;
      array.forEach((item, index, attr) => {
        var allItem ="locationList1[" + index + "].classState";
        var array2Item="locationList2[" + index+ "].classState";
        this.setData({
          [allItem]: "location",
          [array2Item]:"location"
        })
        if (index == i) {
          var allItem1 = "locationList1[" + index + "].classState";
          this.setData({
            [allItem1]: "locationPressed"
          })
        }
      })
  },
  /**
   * 位置触摸函数2 7-12
   */
  locationClick2: function (e) {
    console.log("wdwqdqwd")
    var i = e.currentTarget.dataset.index;
    var array = this.data.locationList2;
    var array1 = this.data.locationList1;
    array.forEach((item, index, attr) => {
      var allItem = "locationList2[" + index + "].classState";
      var array2Item = "locationList1[" + index + "].classState";
      this.setData({
        [allItem]: "location",
        [array2Item]: "location"
      })
      if (index == i) {
        var allItem1 = "locationList2[" + index + "].classState";
        this.setData({
          [allItem1]: "locationPressed"
        })
      }
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