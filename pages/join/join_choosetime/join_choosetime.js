// pages/join/join_choosetime/join_choosetime.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_name: '',
    address: '',
    obj_data:[],
    show_startOrd_time:[],
    choseing_index: ''
  },
  chose_date: function(e){
    console.log(e.currentTarget.dataset.index) //点击的日期索引
    this.change_chose(e.currentTarget.dataset.index)
  },
  change_chose:function(index){
    this.setData({
      choseing_index : index,
    })
  },
  to_chose_obj: function(e){
    var that = this;
    console.log(e.currentTarget.dataset.time_index)
    console.log(this.data.obj_data[this.data.choseing_index].objs[e.currentTarget.dataset.time_index])
    // e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../join_chose_obj/join_chose_obj?objs=' + JSON.stringify(this.data.obj_data[this.data.choseing_index].objs[e.currentTarget.dataset.time_index]) + '&item_name=' + that.data.item_name + '&address=' + that.data.address,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = JSON.parse(options.obj_data);
    // console.log(data);
    // console.log(data[0])
    // console.log(options.address)
    this.setData({
      item_name: options.item_name,
      address: options.address,
      obj_data: JSON.parse(options.obj_data),
      choseing_index: 0
    })
    // var s = "2005-12-15   09:41:30";
    // var d = new Date(Date.parse(s.replace(/-/g, "/"))); 
    // console.log(d)
    // let that = this;
    // var success = function (res) {
    //   that.setData({
    //     item_name: res.data.item_name,
    //     item_type: res.data.item_type,
    //     text_info: res.data.text_info,
    //     pass_id: res.data.pass_id,
    //     start_time: util.deal_time(res.data.start_time),
    //     end_time: util.deal_time(res.data.end_time),
    //     contacter: res.data.contacter,
    //     contacts: res.data.contacts,
    //     item_address: res.data.item_address,
    //     lau_time: util.deal_time(res.data.lau_time),
    //     img_info: res.data.img_info,
    //     obj_data: res.data.obj_data

    //   })
    //   that.test()
    // }
    // util.getiteminfo_bywd('join_page', success, options.wd, null);
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