// pages/index/index.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperitem: [{ name: '进入使用说明url', url: '../handbook/handbook', src: '../../icons/swiper1.png' },
      { name: '快速活动发起url', url: '../sponsor/launch_book/launch_book', src: '../../icons/swiper2.png' }], 
    imageUrls:['', '../sponsor/launch_book/launch_boox'],
      // { name: '热门活动延涛大佬征婚url', url: '2', src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg' }],
      showingitems:[],
      doing_items:[],
      willbe_items:[],
      show_ing: 'show', //'show'表示当前展示的项目类别栏目 ''表示当前不展示的
      show_willbe: '' 
  },
  swipclick: function (e) {//点击图片触发事件
    console.log(e)
    console.log(this.data.swiperitem[e.currentTarget.dataset.index].url);
    var url = this.data.swiperitem[e.currentTarget.dataset.index].url
    wx.navigateTo({
      url: url,
    })
  },
  changeshow: function(){
    this.setData({
      show_ing: this.data.show_ing? '': 'show',
      show_willbe: this.data.show_willbe? '': 'show'
    }) 
  },
  binditemshow:function(e){
    if (e.target.id == 'ing' && this.data.show_willbe){
      this.changeshow()
      this.setData({
        showingitems: this.data.doing_items
      })
    }
    else if(e.target.id == 'willbe' && this.data.show_ing){
      this.changeshow()
      this.setData({
        showingitems: this.data.willbe_items
      })
    }
  },
  toiteminfo_page: function(e){
    wx.navigateTo({
      url: '../join/join_iteminfo/join_iteminfo?wd=' + e.currentTarget.dataset.name,
    })
    console.log(e.currentTarget.dataset.name)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    wx.showLoading({
      title: '加载中',
    })
    console.log(options)
    var that=this;
    var success = function(res){
      wx.hideLoading()
      console.log(res)
      that.setData({
        doing_items: res.data.doing_items,
        willbe_items: res.data.willbe_items,
        showingitems: res.data.doing_items,

      })
    }
    util.getiteminfo_bywd('home_page', success)
    // wx.request({
    //   url: 'http://127.0.0.1:5000/items',
    //   method: "POST",
    //   success(res){
    //     if (res.data.errNum == 0){
    //       that.setData({
    //         doing_items: res.data.data.doing_items,
    //         willbe_items: res.data.data.willbe_items
    //       })
    //     }
    //     else if (res.data.errNum == -1){
    //       console.log(res.data.errMsg)
    //     }
    //     else{
    //       console.log(res.data.data.willbe_items)
    //       console.log('server ERROR')
    //     }
    //   }
    // })
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
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var success = function (res) {
      wx.hideLoading()
      console.log(res)
      if (res.data){
        that.setData({
          doing_items: res.data.doing_items,
          willbe_items: res.data.willbe_items,
          showingitems: res.data.doing_items,
          show_ing: 'show',
          show_willbe: ''
        })
      }else{
        console.log('server Error.')
      }
    }
    util.getiteminfo_bywd('home_page', success)
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
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var success = function (res) {
      wx.hideLoading()
      console.log(res)
      that.setData({
        doing_items: res.data.doing_items,
        willbe_items: res.data.willbe_items,
        showingitems: res.data.doing_items

      })
    }
    util.getiteminfo_bywd('home_page', success)
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