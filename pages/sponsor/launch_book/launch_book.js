// pages/sponsor/launch_queue/launch_queue.js
var util = require('../../../utils/util.js'); 

function getnow() {
  var date = new Date();
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}
function getend(day) {
  day = day||90;
  var date = new Date();
  date.setDate(date.getDate()+day)
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}
//判断是否空列表
function isEmpty(i){
  if (i === undefined || i == 0){
    return false
  }else{
    return true
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form_data: {},
    upload_pic_status: ['', 0], //0表示未上传1表示已上传
    timetable: [{start_date: getnow(), end_date: getnow(), start_time: '', end_time: ''}],
    timetable_css: [{ start_date: '', end_date: '', start_time: '', end_time: '' }],
    objs: [{ obj_name: '', minOrd_time: '', ordable_sum: ''}, { obj_name: '', minOrd_time: '', ordable_sum: '' }],
    len: { item_name: 0, item_textinfo: 0, objs: [{ obj_name: 0, minOrd_time: 0, ordable_sum: 0 }, { obj_name: 0, minOrd_time: 0, ordable_sum: 0 }], contacter: 0, contacts: 0, address_detail: 0},
    date: [getnow(), getend(90)], //只支持发起九十天以内的活动
    address: [['广东省', '广州市', '番禺区'], 0],
    item_name: '',
    item_addrsss: '',
    page_show: 1,
    tt: ''
  },
  choose_pic: function(){
    // this.setData({
    //   upload_pic_status: 1
    // })
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res.tempFilePaths)
        that.data.upload_pic_status = [res.tempFilePaths[0], 1];
        that.setData({
          upload_pic_status: that.data.upload_pic_status
        })
      }
    })
  },
  upload_pic: function(pass_id){
    var that = this;
    // 此处采用闭包回调的方式 获取token
    var upload = function (token) {
      // var that_func = this;
      // console.log(this)
      pass_id = pass_id;
      if (token) {
        wx.uploadFile({
          url: 'https://yun.hookeii.cn/launchActivity/uploadimg', //接口
          filePath: that.data.upload_pic_status[0],
          name: 'file',
          formData: {
            'wd': pass_id,
            'token': token
          },
          success: function (res) {
            var data = JSON.parse(res.data);
            if (data.errNum == 0){
              wx.hideLoading()
              wx.showToast({
                title: '发起成功！跳转中',
                icon: 'loading',
                duration: 1500,
                mask: true,
                success(res){
                  that.to_success(pass_id)
                }
              })
              return true
            }else if (data.errMsg == 'tokenError') {
              util.updatetoken(upload)
            }else{
              wx.hideLoading()
              wx.showToast({
                title: '图片上传失败！',
                icon: 'loading',
                duration: 1500,
                mask: true
              })
              return false
            }

            console.log(data);
            //do something
          },
          fail: function (error) {
            console.log(error);
          }
        })
      } else {
        console.log(upload)
        console.log(111)
        util.gettoken(upload)
      }
    }
    if (!pass_id){
      console.log('pass_id error')
      wx.hideLoading()
      wx.showToast({
        title: '图片上传失败！',
        icon: 'loading',
        duration: 1500,
        mask: true
      })
      return false
    }else{
      upload()
    }
  
  },
  preview_pic: function(e){
    // console.log(e.currentTarget.dataset.src)
    if(e.currentTarget.dataset.src){
      let url = e.currentTarget.dataset.src
      wx.previewImage({
        urls: [url],
      })
    }
  },
  cancel_upload_pic: function(){
    //重置上传图片
    let upload_pic_status = ['', 0]
    this.setData({
      upload_pic_status: upload_pic_status
    })
  },
  getlen_item_name: function(e){
      // console.log(e.detail.cursor)
    this.data.len.item_name = e.detail.cursor 
    let len = this.data.len;
      this.setData({
        len:  this.data.len      
      })
      // setlength(this, len)
  },
  getlen_item_textinfo: function(e){
    // console.log(e.detail.cursor)
    this.data.len.item_textinfo = e.detail.cursor
    this.setData({
      len: this.data.len
    })
  },
  getlen_contacter: function (e) {
    // console.log(e.detail.cursor)
    this.data.len.contacter = e.detail.cursor
    this.setData({
      len: this.data.len
    })
  },
  getlen_address_detail: function (e) {
    // console.log(e.detail.cursor)
    this.data.len.address_detail = e.detail.cursor
    this.setData({
      len: this.data.len
    })
  },
  getlen_contacts: function (e) {
    // console.log(e.detail.cursor)
    this.data.len.contacts = e.detail.cursor
    this.setData({
      len: this.data.len
    })
  },
  get_datetime: function(e){
    console.log(e.currentTarget.dataset)
    let index = e.currentTarget.dataset.index;
    let name = e.currentTarget.dataset.name
    this.data.timetable[index][name] = e.detail.value
    this.data.timetable_css[index][name] = 1 
    this.setData({ 
      timetable: this.data.timetable,
      timetable_css: this.data.timetable_css
    })
    console.log(this.data.timetable)
  },
  del_datetime: function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    this.data.timetable.splice(index, 1);
    this.data.timetable_css.splice(index, 1);
    this.setData({
      timetable: this.data.timetable,
      timetable_css: this.data.timetable_css
    })
  },
  add_datetime: function(){
    let date = new Date();
    // console.log(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate())
    let str_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    console.log(date)
    let new_time = { start_date: str_date, end_date: str_date, start_time: '', end_time: '' };
    let new_time_css = { start_date: '', end_date: '', start_time: '', end_time: '' }
    this.data.timetable.push(new_time);
    this.data.timetable_css.push(new_time_css);
    this.setData({
      timetable: this.data.timetable,
      timetable_css: this.data.timetable_css
    })
    // console.log(this.data.now_date)
  },
  del_obj: function(e){
    console.log(e)
    let index = e.currentTarget.dataset.index;
    this.data.objs.splice(index, 1);
    this.data.len.objs.splice(index, 1);
    this.setData({
      objs: this.data.objs,
      len: this.data.len
    })
    // console.log(this.data.objs)
  },
  change_objs: function(e){
    console.log(e)
    let index = e.target.dataset.index
    let data_name = e.target.dataset.name
    this.data.objs[index][data_name] = e.detail.value
    this.data.len.objs[index][data_name] = e.detail.cursor
    this.setData({
      len: this.data.len,
      objs: this.data.objs
    })
    // console.log(this.data.objs)
  },
  add_obj: function(){
    let new_len = { obj_name: 0, minOrd_time: 0, ordable_sum: 0 };
    let new_objs_value = { obj_name: '', minOrd_time: '', ordable_sum: '' };
    this.data.len.objs.push(new_len)
    this.data.objs.push(new_objs_value)
    this.setData({
      len: this.data.len,
      objs: this.data.objs
    })
  },
  get_address: function(e){
    console.log(e)
    let address = e.detail.value
    console.log(address)
    this.data.address = [address,1]
    this.setData({
      address: this.data.address
    })
  },
  get_page_show: function(e){
    // console.log(e.detail.value)
    this.data.page_show = (e.detail.value)?1:0
    // console.log(this.data.page_show)

  },
  test: function(e){
    console.log(e.detail)
    let value = e.detail.value
    this.setData({
      tt: value
    })
    console.log(this.data.tt)
  },
  check_fill_remind: function(data, content){
    if (data){
      return data
    }else{
      wx.showModal({
        title: content + '未填写',
        content: '请填写'+ content,
        showCancel: false
      })
    }
  },
  submit: function(e){
    var that = this;
    let data = new Array();
    let item_name = '';
    let item_type = 0;
    let text_info = '';
    let contacter = '';
    let contacts = '';
    let address = '';
    let address_detail = '';
    let objs = [];
    let timetable  = [];
    let page_show = that.data.page_show;
    // 验证input必填项
    item_name = this.check_fill_remind(e.detail.value.item_name, '活动/项目名称');
    item_type = 2;
    text_info = this.check_fill_remind(e.detail.value.text_info, '活动/项目介绍');
    contacter = this.check_fill_remind(e.detail.value.contacter, '联系人');
    contacts = this.check_fill_remind(e.detail.value.contacts, '联系方式');
    address = (this.check_fill_remind(this.data.address[1], '地区') ? this.data.address[0].join('') : null);
    address_detail = e.detail.value.address_detail;
    console.log(address_detail)
    address = address_detail ? (address + address_detail) : (address);
    objs = this.data.objs.slice(0);
    timetable = this.data.timetable.slice(0);
    console.log(timetable)
    data = { data: { item_name: item_name, item_type: item_type, contacts: contacts, contacter: contacter, text_info: text_info, timetable: timetable, objs: objs, address: address, page_show: page_show } }
    
    // 提交跳转成功
    var naviga_success = function (res) {
      that.setData({
        item_name: item_name,
        item_address: address
      })
      let pass_id = res.pass_id
      console.log(pass_id)
      // 上传图片
      if (pass_id){
        if (that.data.upload_pic_status[1] == 1){
          wx.showLoading({
            title: '上传图片中',
            mask: true
          })
          that.upload_pic(pass_id)
        }else{
          wx.hideLoading()
          wx.showToast({
            title: '发起成功！跳转中',
            icon: 'loading',
            duration: 1500,
            mask: true,
            success(res) {
              that.to_success(pass_id)
            }
          })
        }
      }else{
        wx.hideLoading()
        console.log('pass_id Error')
        wx.showToast({
          title: '未知错误！',
          icon: 'loading',
          duration: 1500,
          mask: true
        })
      }
    }
    // 跳转页面的回调
    // var navito = function(pass_id, item_name, item_address){
    //   item_name = item_name;
    //   item_address = item_addrsss;
    //   that.to_success(item_name, item_address, pass_id)
    // }
    // 验证timetable填写是否完整
    for (let i = 0; i < data.data.timetable.length; i++){
      if ((!data.data.timetable[i].start_time) && (!data.data.timetable[i].end_time)){
        //全为空的冗余时间段，去除
        console.log(1)
        data.data.timetable.splice(i,1)
      }
    }
    if (!(data.data.timetable === undefined || data.data.timetable.length == 0)){
      console.log(data.data.timetable)
      for (let i in data.data.timetable) {
        if (data.data.timetable[i].start_date && data.data.timetable[i].end_date && data.data.timetable[i].start_time && data.data.timetable[i].end_time) {

        }else{
          wx.showModal({
            title: '时间段信息未填写完整',
            content: '请检查是否有时间段信息未填写完成',
            showCancel: false
          })
          return
        }
      }
    }else{
      wx.showModal({
        title: '时间段信息未填写',
        content: '请检查时间段信息是否未填写完成',
        showCancel: false
      })
      return
    }
    // 预定场地编号
    console.log(111)
    for (let i = 0; i < data.data.objs.length; i++) {
      data.data.objs[i].obj_num = i
    }
    // 验证objs的填写
    for (var i = 0; i <data.data.objs.length; i++){
      if (!(data.data.objs[i].obj_name && data.data.objs[i].minOrd_time && data.data.objs[i].ordable_sum)){
        
        wx.showModal({
          title: '场地信息未填写完整',
          content: '未填写部分确定使用默认填写的场地名称（场地名称'+i+'号场'+'，单次预定时间：60分钟，容纳数：1）？',    
   
          success: function (res) {
            if (res.confirm) {
              //点击确认
              for (let i = 0; i < data.data.objs.length; i++){
                if (!data.data.objs[i].obj_name){
                  data.data.objs[i].obj_name = i+'号场'
                }
                if (!data.data.objs[i].minOrd_time) {
                  data.data.objs[i].minOrd_time = 60 
                }
                if (!data.data.objs[i].ordable_sum) {
                  data.data.objs[i].ordable_sum = 1
                }
              }
              console.log(data)
              wx.hideLoading()
              wx.showLoading({
                title: '提交中',
                mask: true
              })
              util.getdatabytoken(data, '/launchActivity', null, null, naviga_success)
              // 点击取消的话等待重新提交
            }
          }
        })
      return //阻塞
      }
    }


    console.log(data)
    if (! (item_name && text_info && contacter && contacts && address)){
      return //阻塞
    }else{
      wx.hideLoading()
      wx.showLoading({
        title: '提交中',
        mask: true
      })
      util.getdatabytoken(data, '/launchActivity', null, null, naviga_success)
    }
  },
  to_success: function (pass_id, item_name, item_address){
    //成功跳转
    item_name = item_name || this.data.item_name;
    item_address = item_address || this.data.item_address;
    console.log(item_name, item_address, pass_id)
    wx.redirectTo({
      url: '../launch_success/launch_success?item_name=' + item_name + '&pass_id=' + pass_id+ '&item_address=' + item_address  
    })
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