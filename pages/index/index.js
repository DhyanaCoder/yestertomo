// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     indexImage:[
      {
         srcx:"http://img1.imgtn.bdimg.com/it/u=3332927451,1856117576&fm=26&gp=0.jpg",
      },
      {
  srcx:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3001740815,126276908&fm=26&gp=0.jpg",
      },
      {
        srcx:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1563085931,1875757424&fm=26&gp=0.jpg",
      },
       {
         srcx: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1563085931,1875757424&fm=26&gp=0.jpg",
       }
     ],
     listview1:[
       {
         title:"title1",
         srcx:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1704104585,2070310680&fm=27&gp=0.jpg",
         content:"松隆松隆子",
       },
       {
         title:"title2",
         srcx:"http://img3.imgtn.bdimg.com/it/u=1624639366,364330247&fm=26&gp=0.jpg",
         content:"松隆子松隆子松隆子松隆子"
       },
       {
         title: "title2",
         srcx: "http://img3.imgtn.bdimg.com/it/u=1624639366,364330247&fm=26&gp=0.jpg",
         content: "松隆子松隆子松隆子松隆子"
       },
       {
         title: "title2",
         srcx: "http://img3.imgtn.bdimg.com/it/u=1624639366,364330247&fm=26&gp=0.jpg",
         content: "松隆子松隆子松隆子松隆子"
       },
       {
         title: "title2",
         srcx: "http://img3.imgtn.bdimg.com/it/u=1624639366,364330247&fm=26&gp=0.jpg",
         content: "松隆子松隆子松隆子松隆子"
       },
  
     ],
    listview2: [
      {
        title: "title1",
        srcx: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1704104585,2070310680&fm=27&gp=0.jpg",
        content: "松隆子松隆子松隆子松隆子松隆子松隆子",
      },
      {
        title: "title2",
        srcx: "http://img3.imgtn.bdimg.com/it/u=1624639366,364330247&fm=26&gp=0.jpg",
        content: "松隆子松隆子松隆子松隆子松隆子松隆子"
      },
      {
        title: "title3",
        srcx: "http://img5.imgtn.bdimg.com/it/u=1288601965,3991234862&fm=26&gp=0.jpg",
        content: "松隆子松隆子松隆子松隆子松隆子松隆子",
      }
      ,
      {
        title: "title3",
        srcx: "http://img5.imgtn.bdimg.com/it/u=1288601965,3991234862&fm=26&gp=0.jpg",
        content: "松隆子松隆子松隆子松隆子松隆子松隆子",
      }
      ,
      {
        title: "title3",
        srcx: "http://img5.imgtn.bdimg.com/it/u=1288601965,3991234862&fm=26&gp=0.jpg",
        content: "松隆子松隆子松隆子松隆子松隆子松隆子",
      }
    ],
     currentIndex:"0",
     Tag1:"text-selected",
     Tag2:"text-orginal"
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
   * 点击正在进行或者即将进行的切换操作。
   */
  textTag1(event){
this.setData({
  currentIndex:0,
  Tag1:"text-selected",
  Tag2: "text-orginal",
})  
},

  textTag2(event) {
    this.setData({
      currentIndex: 1,
      Tag2: "text-selected",
      Tag1: "text-orginal",
    })
  },
  stopTouchMove: function () {
    return false;
  }
})