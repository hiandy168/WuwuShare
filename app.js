//app.js
App({
  onLaunch: function () {
     var that = this
     
  },
  globalData:{
    serverUrl:"http://www.zjlcloud.cn/test1.0/"
  },
  data:{
      userInfo:{
        user_id:"",
        username:"",
        nickname:"未登录",
        address:"",
        latitude:"",
        longitude:"",
        phone:"",
        deposit:""
      },
    isLogin:false,
  }
})