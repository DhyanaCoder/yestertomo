
module.exports = {
  settoken: settoken,
  getdatabytoken: getdatabytoken,
  getiteminfo_bywd: getiteminfo_bywd,
  data_split_time: data_split_time,
  deal_time: deal_time,
  deal_time_list: deal_time_list,
  end_time: end_time,
  gettoken: gettoken, 
  updatetoken: updatetoken
}
// const severUrl = 'http://127.0.0.1:5000';
const severUrl = 'https://yun.hookeii.cn';
var iteminfo_urllist = [
  { name: 'home_page', url: '/items', usetoken:0}, 
  { name: 'join_page', url: '/joinInfo', usetoken: 0 }, 
  { name: 'mylaunch_page', url: '/iteminfo/Mylaunch', usetoken: 1 },
  { name: 'mylaunchdetail_page', url: '/iteminfo/Mylaunch/detail', usetoken: 1 },
  { name: 'myjoined_page', url: '/iteminfo/Myjoined', usetoken: 1},
  { name: 'myjoineddetail_page', url: '/iteminfo/Myjoined/detail', usetoken: 1}]

function getiteminfo_bywd(info_type, success_call, pass_id, urllist){
  // url列表
  urllist = iteminfo_urllist
  // 获取项目信息函数
  var getiteminfo = (pass_id, url, usetoken, success_call) =>{
    var data = pass_id?{ wd: pass_id }:new Object();
    if (usetoken){
      // 需要token身份验证的情况
      getdatabytoken(data, url, null, null, success_call)
    }else{
      // 不需要token身份验证的情况
      wx.request({
        url: severUrl + url,
        // url: "http://127.0.0.1:5000" + url,
        method: "POST",
        data: data,
        header: {
          'content-type': 'application/json'
        },
        success(res){
          success_call(res.data)
        }
      })
    }
  }
  var success = function(res){
    return res;
  }
  for (let i = 0;i<urllist.length;i++){
    if (urllist[i].name == info_type){
      
      return getiteminfo(pass_id, urllist[i].url, urllist[i].usetoken, success_call) //返回数据
    }
  }
}
function gettoken(success_call, tokenerror){
  console.log(success_call)
  let token = wx.getStorageSync('token') //缓存被清除或者 无法正常获取token 重新获取回调
  if (token && (!tokenerror)){
    success_call(token)
  }else{
    settoken(success_call)
  }
}
function updatetoken(success_call){
  // token 过期 回调
  settoken(success_call)
}
function getdatabytoken(data, url, method, token, success_call, fail_call){
  // token过期的回调函数success
  var success = function (token) {
    data = data;
    url = url;
    method = method;
    getdatabytoken(data, url, method, token, success_call)
  }
  console.log(data)
  console.log(typeof data)
  method = method || 'POST';
  data.token = token || (wx.getStorageSync('token') ? wx.getStorageSync('token') : null) //缓存被清除或者 无法正常获取token 重新获取回调
  if (data.token){
    console.log(data.token)
    wx.request({
      url: severUrl + url,
      // url: "http://127.0.0.1:5000" + url,
      data: data,
      method:method,
      header: {
        'content-type': 'application/json'
      },
      success(res){
        if (res.data.errNum == 0) { //已经进行过错误判断了 正常传出的情况 可以直接使用数据
          try {
            // console.log(success_call)
            success_call(res.data); //正常 回调
          } catch (e) {
            console.log(JSON.stringify(e))
            // Do something when catch error
          }
        } else if (res.data.errNum == -1) {
          if (res.data.errMsg == 'tokenError') //可能是token过期 回调 再运行一次此函数
            settoken(success) //bug可能一直回调
            wx.hideLoading()
            wx.hideToast()
            console.log(res.data)
          } else {
            if (fail_call){
              fail_call()
            }else{
              wx.hideLoading()
              wx.hideToast()
              wx.showToast({
                title: '请求失败！',
                icon: 'none'
              })
            }
            console.log("server ERROR")
          }
      }
    })
  }else{
    settoken(success)
    // tokenrequset(data, url, method, getdatabytoken)
    console.log('wait gettoken')
  }
}
//新用户注册和更新token的接口
function settoken(success_call, data, url, method){
wx.login({
  success(res) {
    console.log(res.code)
    if (res.code) {
      // 发起网络请求
      wx.request({
        url: severUrl + '/newuser',
        // url: "http://127.0.0.1:5000" + url,
        header:{
          'content-type': 'application/json'
        },
        method:"POST",
        data: {
          code: res.code
        },
        success(res){
          // console.log(typeof res.data) object
          if (res.data.errNum == 0){    
            try {
              wx.setStorageSync('token', res.data.User_token)
              console.log(success_call)
              if (success_call  == getdatabytoken){
                success_call(data, url, method)
              }else{
                success_call(res.data.User_token)
              }
            } catch (e) {
              console.log(e)
              // Do something when catch error
            }
            // wx.getStorage({
            //   key: 'token',
            //   success(res) {
            //     console.log(res.data)
            //   }
            // })
          }else if (res.data.errNum == -1){
            console.log(res.data.errMsg)
          }else{
            console.log("server ERROR")
          }
        }
      })
    } else {
      console.log('token获取失败！' + res.errMsg)
    }
  }
})
}

//未获取token token错误的回调函数
function tokenrequset(data, url, method, callback){
  var count = 3;
    //刷新session_key 最多三次放弃
  var toekn = settoken(callback, data, url, method)
}
// 传入多个项目的数据 返回它们指定属性的时间列表 年 月 日 时 分
function data_split_time(data, time_type){
  let ordered_tiemlist = new Array();
  if (time_type == 'start_time') {
    for (let i = 0; i < data.length; i++) {
      ordered_tiemlist[i] = data[i].start_time.replace(/"(\d+)-(\d+)-(\d+)\s(\d+):(\d+):\d+"/g, '$1 $2 $3 $4 $5').split(' ');
    }
  } else if (time_type == 'end_time') {
    for (let i = 0; i < data.length; i++) {
      ordered_tiemlist[i] = data[i].end_time.replace(/"\d+-(\d+)-(\d+)\s(\d+):(\d+):\d+"/g, '$1 $2 $3 $4 $5').split(' ');
    }
  }
  return ordered_tiemlist;
}; 

// 传入一个时间字符串 返回它的时间列表 年 月 日 时 分
function deal_time(time){
  let tiemlist = time.replace(/"(\d+)-(\d+)-(\d+)\s(\d+):(\d+):\d+"/g, '$1 $2 $3 $4 $5').split(' ');
  return tiemlist;
}; // [2015, 2, 5, 14, 00 ]

// 传入时间列表 返回它们的时间列表 年 月 日 时 分
function deal_time_list(list, time_type){
  let ordered_tiemlist = new Array();
    for (let i = 0; i < data.length; i++) {
      ordered_tiemlist[i] = list[i].replace(/"\d+-(\d+)-(\d+)\s(\d+):(\d+):\d+"/g, '$1 $2 $3 $4 $5').split(' ');
    }
  return ordered_tiemlist;
};


function end_time(time, minOrd_time){
  var datetime = new Date();
  var new_time = new Array();

  datetime.setFullYear(time[0], time[1], time[2]);
  datetime.setHours(time[3], time[4]);
  datetime.setMinutes(datetime.getMinutes()+minOrd_time);
  new_time = [datetime.getFullYear(), datetime.getMonth(), datetime.getDay(), datetime.getHours(), datetime.getMinutes()]
  return new_time
  }