//获取应用实例
var util = require("../../utils/util.js");
var app = getApp()
Page({
  data: {
      nickname:app.data.userInfo.nickname,
      deposit:app.data.userInfo.deposit
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
    console.log(app);
    console.log(this);
      this.setData({
          nickname:app.data.userInfo.nickname,
          deposit:app.data.userInfo.deposit
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
