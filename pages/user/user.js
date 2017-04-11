//获取应用实例
var app = getApp()
Page({
  data: {
      username:app.globalData.userInfo.name,
      count:'400',
  },
  // 初始化
  onLoad: function () {
      this.setData({
          username:app.globalData.userInfo.name
      })
    console.log(app.globalData.userInfo);
  },
  onShow:function(){
      this.setData({
          username:app.globalData.userInfo.name
      })
  },
  onHide:function(){
  },
  //跳转到用户信息
  toUserInfo:function(){
      wx.navigateTo({
          url: '../userInfo/userInfo',
        })
  },
  toMyPublish:function(){
      wx.navigateTo({
        url: '../myPublish/myPublish',
      })
  },
  toMyRent:function(){
      wx.navigateTo({
        url: '../myRent/myRent',
      })
  },
//   到登陆界面
  toLogin:function(){
      var isLogin=app.globalData.isLogin;
      if(isLogin==false){
        wx.navigateTo({
          url: '../login/login',
        })
      }
  },
  toNotify:function(){
    wx.navigateTo({
      url: '../notify/notify',
    })
  }
})
