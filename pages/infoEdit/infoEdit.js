// pages/infoEdit/infoEdit.js
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
  },
  onShow:function(){
    this.setData({
      name:app.globalData.userInfo.name,
      sex:app.globalData.userInfo.sex,
      age:app.globalData.userInfo.age,
      tel:app.globalData.userInfo.tel,
      address:app.globalData.userInfo.address
    })
  },
  toEditInfo:function(){
      wx.navigateTo({
        url: '../infoEdit/infoEdit'
        })
  },
  editNameBlur:function(event){
      var name = event.detail.value;
      app.globalData.userInfo.name = name;
       console.log(app.globalData.userInfo);
  },
  editSexChange:function(event){
       var sex = event.detail.value;
      app.globalData.userInfo.sex = sex;
  },
  editAgeBlur:function(event){
       var age = event.detail.value;
      app.globalData.userInfo.age = age;
  },
  editTelBlur:function(event){
       var tel = event.detail.value;
      app.globalData.userInfo.tel = tel;
  },
  editAddBlur:function(event){
       var address = event.detail.value;
      app.globalData.userInfo.address = address;
  },
  //保存信息
  saveEdit:function(){

     wx.navigateBack({
       delta: 2, // 回退前 delta(默认为1) 页面
     })

  }
})