// pages/infoEdit/infoEdit.js
var app = getApp();

Page({
  data:{
    nickname:"",
    phone:"",
    address:"",
    longitude:"",
    latitude:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      nickname:app.data.userInfo.nickname,
      phone:app.data.userInfo.phone,
      address:app.data.userInfo.address,
      longitude:app.data.userInfo.longitude,
      latitude:app.data.userInfo.latitude
    })
  },
  onShow:function(){
     this.setData({
      nickname:app.data.userInfo.nickname,
      phone:app.data.userInfo.phone,
      address:app.data.userInfo.address,
      longitude:app.data.userInfo.longitude,
      latitude:app.data.userInfo.latitude
    })
  },  
  toMap:function(){
    var that = this;
    wx.chooseLocation({
      success: function(res){
        that.setData({
          address:res.address,
          longitude:res.longitude,
          latitude:res.latitude
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  //保存信息
  formSubmit:function(event){

    console.log(event.detail.value);
    var data = event.detail.value;
    app.data.userInfo.nickname = data.nickname;
    app.data.userInfo.phone = data.phone;
    app.data.userInfo.address = data.address;
    app.data.userInfo.longitude = this.data.longitude;
    app.data.userInfo.latitute = this.data.latitude; 

     wx.navigateBack({
       delta: 2, // 回退前 delta(默认为1) 页面
     })

  }
})