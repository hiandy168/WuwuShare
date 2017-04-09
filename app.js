//app.js
App({
  onLaunch: function () {
    //  var that = this
    // wx.login({
    //   success: function (res) {
    //     var appId = 'wxac0b300c9c488825';//微信公众号平台申请的appid
    //     var appSecret = '9de6a323bfeda49725acbcac826d8e44';//微信公众号平台申请的app secret
    //     var js_code = res.code;//调用登录接口获得的用户的登录凭证code
    //     wx.request({
    //       url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+appId+'&secret='+appSecret+'&js_code='+js_code+'&grant_type=authorization_code',
    //       data: {},
    //       method: 'GET',
    //       success: function (res) {
    //         console.log(res);
    //         var openid = res.data.openid //返回的用户唯一标识符openid
    //         console.log(openid)
    //         console.log("试试吧上面就是获得的openid")
    //       }
    //     })
    //   }
    // })
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