// pages/regester/regester.js
Page({
  data:{
    username:"",
    password1:"",
    password2:"",
    nickname:"",
    phone:"",
    address:"",
    longitude:"",
    latitude:""
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
  regesterSubmit:function(event){
    console.log(event.detail.value);
    var that = this;
    var data = event.detail.value;
    wx.request({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/User/insert',
      data: {
          username:data.username,
          password:data.password,
          repassword:data.repassword,
          nickname:data.nickname,
          phone:data.phone,
          address:data.address,
          longitude:that.longitude,
          latitude:that.latitude
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data);
        if(res.data.status==1){
            wx.showToast({
              title:"注册成功"
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
  toMap:function(){
    var that =this;
    wx.chooseLocation({
      success: function(res){
        console.log(res);
        that.setData({
          address:res.address,
          longitude:res.longitude,
          latitude:res.latitude
        })
        console.log(that);
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})