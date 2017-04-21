//app.js
App({
  onLaunch: function () {
     var that = this
    //     wx.login({
    //   success: function(res) {
    //     if (res.code) {
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://60260929.wuwushare.com//login',
    //         data: {
    //           code: res.code
    //         }
    //       })
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   }
    // });
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