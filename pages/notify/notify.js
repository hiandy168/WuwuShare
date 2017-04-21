// pages/notify/notify.js
var app = getApp();
Page({
  data:{
    messageList:[],
    serverUrl:app.globalData.serverUrl,
    image:[]
  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Message/getMessage',
      data: {
        id:app.data.userInfo.user_id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data.data);
        var data = res.data.data;
        if(res.data.status==1){
          that.setData({
            messageList:data,
            serverUrl:app.globalData.serverUrl
          })
          //获取图片
          for(var i=0;i<data.length;i++){
            console.log(data[i]);
            wx.request({
              url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Good/select',
              data: {
                id:data[i].good_id
              },
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              // header: {}, // 设置请求的 header
              success: function(res){
                console.log(res.data.data.image);
                // var img = that.data.image.push();
                // console.log(img);
                that.setData({
                  image:that.data.image.push(res.data.data.image+"")
                })
                console.log(that.data.image);
              },
              fail: function(res) {
                // fail
              },
              complete: function(res) {
                // complete
              }
            })
          }
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
  notifyTap:function(event){
    // console.log(event.currentTarget.dataset);
    var dataset = event.currentTarget.dataset;
    wx.showActionSheet({
      itemList:["同意","拒绝","删除消息","设为已读"],
      success:function(res){
        // console.log(res);
        switch(res.tapIndex){
          // 同意
          case 0:
            wx.request({
              url: 'http://www.zjlcloud.cn/test1.0/index.php/'+dataset.url,
              data: {
                action:1,
                id:dataset.msgid
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
          break;
          // 拒绝
          case 1:
            wx.request({
              url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Message/message_rent',
              data: {
                action:0
              },
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              // header: {}, // 设置请求的 header
              success: function(res){
                // success
              },
              fail: function(res) {
                // fail
              }
            })
          break;
          // 删除消息
          case 2:
          wx.request({
              url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Message/message_rent',
              data: {
                action:1
              },
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              // header: {}, // 设置请求的 header
              success: function(res){
                // success
              },
              fail: function(res) {
                // fail
              }
            })
          break;
          // 设为已读
          case 3:;
          brea;
        }
      }
    })
  }
})