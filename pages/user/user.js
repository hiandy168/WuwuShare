//获取应用实例
var app = getApp()
Page({
  data: {
      nickname:app.data.userInfo.nickname,
  },
  // 初始化
  onLoad: function () {
    console.log(app);
    console.log(this);
      this.setData({
          nickname:app.data.userInfo.nickname,
      })
    // console.log(app.globalData.userInfo);
  },
  onShow:function(){
    console.log(app);
    console.log(this);
      this.setData({
          nickname:app.data.userInfo.nickname,
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
      var isLogin=app.data.isLogin;
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
