// pages/person1/person1.js
var util = require('../../utils/util.js'); 
const app = getApp()

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
     userInfo: {},
     canIUse: wx.canIUse('button.open-type.getUserInfo'),
     hasUserInfo : false, //false表示未授权 true表示已授权
     nickname: null,
     avatarUrl: null,
     gender: null,
     infoitems:[
       { text: "我的发起", srcx: "../../icons/personInfoIcons/history.png", url: "./mysponsorlist/mysponsorlist"},
       { text: "我的加入", srcx: "../../icons/personInfoIcons/myjoin.png", url: "./myjoinedlist/myjoinedlist"},
       { text: "联系我们", srcx: "../../icons/personInfoIcons/contact_tous.png", url:"./contact_us/contact_us"}]
  },
  to_userinfo: function(){
    wx.navigateTo({
      url: './personal_info/personal_info',
    })
  },
  /**
   * 授权登录函数
   */
  to_personalpage: function(e){
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: e.currentTarget.dataset.name,
    })
  },
  log:function(e){
    console.log(e.detail)
  },
  getUserInfo: function (e) {
    console.log(e) 
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
    userInfo: e.detail.userInfo,
    nickname: e.detail.userInfo.nickname,
    avatarUrl: e.detail.avatarUrl,
    hasUserInfo: true
    })
  },
/**
* 生命周期函数--监听页面加载
*/
  onLoad: function()  {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo //会被appjs里面的回调函数阻塞 直到获取用户的信息为止
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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