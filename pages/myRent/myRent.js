// pages/myRent/myRent.js
var app = getApp();
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var user_id = app.data.userInfo.user_id;
    wx.request({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/User/getRentGood',
      data: {
        id:user_id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
      },
      fail: function(res) {
        // fail
      }
    })
  },
  unRent:function(){
    wx.showModal({
      title:"确定退租？",
      content:"申请退租后请您及时归还物品",
      success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
    });
  }
})