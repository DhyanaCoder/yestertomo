Page({
  data:{
    info:[
     {
       text:"我的发起",
       srcx:"/icons/personInfoIcons/history.png",
       bindfunction:"mySponsor",
     },
      {
        text: "我的加入",
        srcx: "/icons/personInfoIcons/myjoin.png",
        srcx: "/icons/personInfoIcons/history.png",
        bindfunction: "myJoin",
      },
      {
        text: "联系我们",
        srcx: "/icons/personInfoIcons/setting.png",
        srcx: "/icons/personInfoIcons/history.png",
        bindfunction: "contactUs",
      },
    ],
    check:false,
    check1:true,
    src:"https://pic4.zhimg.com/80/v2-5b9b3f019c7dff5ffb9d24dcf7925147_hd.jpg"
  },
  /**
   * 我的发起
   */
  mySponsor:function(e){
    wx.navigateTo({
      url: 'projectList/projectList',
    })
  }
  ,
  /**
   * 我的加入
   */
  myJoin:function(){
    wx.navigateTo({
      url: 'projectList/projectList',
    })
  }
  ,
  /**
   * 联系我们
   */
  contactUs:function(){
    wx.navigateTo({
      url: 'contactUs/contactUs',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 加载personInfo个人资料页面
   */
  LoadpersonInfo:function(e){
    wx.navigateTo({
      url: 'personInfo/personInfo',
    })
  }
})