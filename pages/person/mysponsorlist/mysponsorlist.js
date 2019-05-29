// pages/person/mysponsorlist/mysponsorlist.js
var util = require('../../../utils/util.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // mylaunchitems: [{ name: '中心湖公园玩耍', pass_id: '45g56', text_info: '可以可以呀亦可以就看嘎A级康啊', img_info: '/icons/', overed: 1 }, { name: '中心湖公园耍', pass_id: '45g74', text_info: '可以可以呀亦可以就看嘎414啊', img_info: '/icons/scan.png', overed: 0  }]
    mylaunchitems:[],
    listnull: 0
  },
  to_mylauncheditem_detail: function(e){
    console.log(e.currentTarget.dataset.wd)
    let data = { 'wd': e.currentTarget.dataset.wd}
    var success = function(res){
      console.log(res.data)
        wx.navigateTo({
          url: './mylauncheditem_detail/mylauncheditem_detail?data=' + JSON.stringify(res.data) + '&overed=' + e.currentTarget.dataset.overed,
        })
      //要传overed 判断是否过期
    }
    util.getdatabytoken(data, '/iteminfo/Mylaunch/detail', null, null, success)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      var success = function(res){
        console.log(res.data) //正常传入

        if (res.errMsg == 'itemNull.') {
          wx.showToast({
            title: '您未发起任何项目，快去发起吧！',
            icon: 'none',
            success:function(){
              that.setData({
                listnull: 1
              })
            },
            complete: function(){
              setTimeout(
                function() { wx.navigateBack({})}, 1500
              )
            }
          })
        } else {
          that.setData({
            mylaunchitems: res.data
          })
        }
        // console.log(res)
      }
      util.getiteminfo_bywd('mylaunch_page', success, null, null);
      // console.log(data)
      // if (data.errNum == 0){
      //   this.setData({
      //     mylaunchitems: data.data
      //   })
      // }else if (data.errNum == -1){
      //   console.log(data.errMsg)
      // }else{
      //   console.log(data)
      // } 
  },
  // 服务器返回的数据
  //             item_todict = [{
  //     'item_name': item.item_name, 'pass_id': item.pass_id, 'item_type': item.item_type,
  //     'overed': (item.end_time < datetime.datetime.now()), 'logic_del': item.logic_del
  //   } for item in itemlist]
  // info = { 'data': item_todict, "errNum": 0, "errMsg": "success" }
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