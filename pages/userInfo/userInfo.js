// pages/userInfo/userInfo.js
var app = getApp();

Page({
  data:{
    nickname:"",
    phone:"",
    address:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      nickname:app.data.userInfo.nickname,
      phone:app.data.userInfo.phone,
      address:app.data.userInfo.address,
    })
    // console.log(this.data);
  },
  onShow:function(){
    this.setData({
      nickname:app.data.userInfo.nickname,
      phone:app.data.userInfo.phone,
      address:app.data.userInfo.address,
    })
  },
  toEditInfo:function(){
      wx.navigateTo({
        url: '../infoEdit/infoEdit'
        })
  },
  backToUser:function(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  }
})