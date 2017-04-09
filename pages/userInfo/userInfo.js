// pages/userInfo/userInfo.js
var app = getApp();

Page({
  data:{
    name:"",
    sex:"",
    age:"",
    tel:"",
    address:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      name:app.globalData.userInfo.name,
      sex:app.globalData.userInfo.sex,
      age:app.globalData.userInfo.age,
      tel:app.globalData.userInfo.tel,
      address:app.globalData.userInfo.address
    })
    console.log(this.data);
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