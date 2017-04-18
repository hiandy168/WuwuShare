// pages/login/login.js
var app = getApp();
Page({
  data:{
    username:"",
    password:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  LoginSubmit:function(event){
    console.log(event.detail.value);
    var that = this;
    var data = event.detail.value;
    wx.request({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/User/index',
      data: {
        username:data.username,
        password:data.password
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data);
        // 登陆成功
        if(res.data.status==1){
          wx.showToast({
            title:"登陆成功",
          })

          app.data.isLogin=true;
          // 存储用户信息
          var userData = res.data.data;
          app.data.userInfo.user_id=userData.user_id;
          app.data.userInfo.username=userData.username;
          app.data.userInfo.nickname=userData.nickname;
          app.data.userInfo.address=userData.address;
          app.data.userInfo.phone=userData.phone;
          app.data.userInfo.latitude=userData.latitude;
          app.data.userInfo.longitude=userData.longitude;

        }
        // 登陆失败
        else{
          
        }
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })


    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  },
  toRegester:function(){
    wx.navigateTo({
      url: '../regester/regester',
    })
  }
})