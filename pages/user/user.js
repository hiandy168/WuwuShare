//获取应用实例
var util = require("../../utils/util.js");
var app = getApp()
Page({
  data: {
      nickname:app.data.userInfo.nickname,
      deposit:app.data.userInfo.deposit,
      notifyNum:""
  },
  // 初始化
  onLoad: function () {
    // console.log(app);
    // console.log(this);
      this.setData({
          nickname:app.data.userInfo.nickname,
          deposit:app.data.userInfo.deposit
      })
    // console.log(app.globalData.userInfo);
  },
  onShow:function(){
    // console.log(app);
    // console.log(this);
    var that = this;
      this.setData({
          nickname:app.data.userInfo.nickname,
          deposit:app.data.userInfo.deposit
      })
      // 获取消息
      wx.request({
        url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Message/getMessage',
        data: {
          id:app.data.userInfo.user_id
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // success
          if(res.data.status==1){
            that.setData({
              notifyNum:res.data.data.length
            })
          }
        },
        fail: function(res) {
          // fail
        },
        complete: function(res) {
          // complete
        }
      })
  },
  onHide:function(){
  },
  //跳转到用户信息
  toUserInfo:function(){
    // 判断登录状态
        if(!util.isLogin()){
          wx.showToast({
            title:"您还未登陆"
          })
          return;
        }
     // 处于登陆状态
      wx.navigateTo({
          url: '../userInfo/userInfo',
        })
  },
  // 跳转到发布界面
  toMyPublish:function(){
    // 判断登录状态
        if(!util.isLogin()){
          wx.showToast({
            title:"您还未登陆"
          })
          return;
        }
     // 处于登陆状态
      wx.navigateTo({
        url: '../myPublish/myPublish',
      })
  },
  // 跳转到租用界面
  toMyRent:function(){
    // 判断登录状态
        if(!util.isLogin()){
          wx.showToast({
            title:"您还未登陆"
          })
          return;
        }
     // 处于登陆状态
      wx.navigateTo({
        url: '../myRent/myRent',
      })
  },
//   到登陆界面
  toLogin:function(){
    // 判断登录状态
        if(util.isLogin()){
          
        }
     // 未处于登陆状态
      var isLogin=app.data.isLogin;
      if(isLogin==false){
        wx.navigateTo({
          url: '../login/login',
        })
      }
  },
  // 跳转到消息界面
  toNotify:function(){
    // 判断登录状态
        if(!util.isLogin()){
          wx.showToast({
            title:"您还未登陆"
          })
          return;
        }
     // 处于登陆状态
    wx.navigateTo({
      url: '../notify/notify',
    })
  }
})
