// pages/test/test.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    res:'',
    appid: '',
    sercet: ''
  },
  clickFormView(event) {
    console.log(event.detail);
    let formId = event.detail.formId;
    // 忽略开发者工具里边的formId
    if (formId && formId !== 'the formId is a mock one') {
      wx.request({
        method: 'POST',
        url: '/api/collectFormId', // 该接口只用来收集formId
        data: { formId: formId } // 只传了一个formId，因为openid和当前用户通常会事先在后台做一个关联，看具体业务了
      });
    }
    // 然后可以干其他事了，比如跳转页面，其他业务逻辑 
    // TODO
  },
  to_chosetime: function(){
    console.log(1)
  },
  onclick:function(){
    // var a = function(e){
    //   console.log(e)
    // }
    // var func = function () {
    //   var args = Array.prototype.slice.call(arguments);
    //   console.log(args);  //执行函数要实现可变参数，如果不用 ES6，还是只能用arguments
    // }

    // //通过 apply，以数组传入任意参数
    // // func.apply(this, [1, 2, 3]);
    // a.apply(this, [1,5])
    
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