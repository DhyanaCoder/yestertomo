// pages/person/myjoinedlist/myjoinedlist.js
var util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myjoinedlist:[],
    start_time:[],
    end_time:[],
    listnull: 0,
  },
  to_joineditem_detail: function(e){
    console.log(e.currentTarget.dataset.wd)
    wx.navigateTo({
      url: './myjoineditem_detail/myjoineditem_detail?wd=' + e.currentTarget.dataset.wd,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var success = function (res){
      if (res.errMsg == 'itemNull.') {
        wx.showToast({
          title: '您未加入任何项目，快速加入小伙伴的项目吧！',
          icon: 'none',
          success:function(){
            that.setData({
              listnull: 1
            })
          },
          complete: function () {
            setTimeout(
              function () { wx.navigateBack({}) }, 1500
            )
          }
        })
      } else {
          var split_time = (data,time_type) => {
            let ordered_tiemlist = new Array();
            if (time_type == 'start_time') {
              for (let i = 0; i < data.length; i++) {
                ordered_tiemlist[i] = data[i].start_time.replace(/"\d+-(\d+)-(\d+)\s(\d+):(\d+):\d+"/g, '$1 $2 $3 $4').split(' ');
                }
              }else if(time_type == 'end_time'){
              for (let i = 0; i < data.length; i++) {
                ordered_tiemlist[i] = data[i].end_time.replace(/"\d+-(\d+)-(\d+)\s(\d+):(\d+):\d+"/g, '$1 $2 $3 $4').split(' ');
            }
            }
            return ordered_tiemlist;
          }; //正则匹配时间返回列表 每一项 月 日 时 分
          that.setData({
            myjoinedlist: res.data,
            start_time: split_time(res.data, 'start_time'),
            end_time: split_time(res.data, 'end_time')
          })
          console.log(res)
          console.log(res.data[0].start_time.replace(/"\d+-(\d+)-(\d+)\s(\d+):(\d+):\d+"/g, '$1 $2 $3 $4').split(' ')) //匹配月日 时间 生成时间列表
      }
    };
    util.getiteminfo_bywd('myjoined_page', success, null, null);
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