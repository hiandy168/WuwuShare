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
    userInfo:{
      name:"jianjian",
      age:"21",
      address:"江西省南昌市华东交通大学",
      sex:"男",
      tel:"10086"
    }
  }
})