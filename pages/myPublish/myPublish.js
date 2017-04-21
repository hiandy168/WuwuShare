// pages/myPublish/myPublish.js
var app = getApp();
Page({
  data:{
    myPublishList:[],
    serverUrl:app.globalData.serverUrl
  },
  onLoad:function(options){
     // 页面初始化 options为页面跳转所带来的参数
    var user_id = app.data.userInfo.user_id;
    var that = this;
    wx.request({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/User/getUserGood',
      data: {
        id:user_id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // console.log(res.data)
        //获取成功
        if(res.data.status == 1){
          var data = [];
          for(var i=0;i<res.data.data.length;i++){
              data.push(res.data.data[i]);
          }
          // console.log(data);
          that.setData({
            myPublishList:data
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
  onShow:function(){
    // 页面初始化 options为页面跳转所带来的参数
    var user_id = app.data.userInfo.user_id;
    var that = this;
    wx.request({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/User/getUserGood',
      data: {
        id:user_id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // console.log(res.data)
        //获取成功
        if(res.data.status == 1){
          var data = [];
          for(var i=0;i<res.data.data.length;i++){
              data.push(res.data.data[i]);
          }
          // console.log(data);
          that.setData({
            myPublishList:data
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
  toPublishInfo:function(event){
    // console.log(event.currentTarget.dataset.goodid);
    var goodid = event.currentTarget.dataset.goodid;
    wx.navigateTo({
      url: '../myPublishInfo/myPublishInfo?good_id='+goodid
    })
  }
})