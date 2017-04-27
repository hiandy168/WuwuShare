// pages/myPublishInfo/myPublishInfo.js
var app = getApp();
Page({
  data:{
    rent:"",
    deposit:"",
    desc:"",
    status:null,
    provide_id:null,
    accept_id:0,
    image:"",
    serverUrl:app.globalData.serverUrl,
    good_id:"",
    accept_nickname:"",
    accept_phone:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // console.log(options);
    var that = this;
    wx.request({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Good/select',
      data: {
        id:options.good_id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data);
        var data = res.data;
        if(data.status==1){
          that.setData({
            rent:data.data.rent,
            deposit:data.data.deposit,
            desc:data.data.desc,
            status:data.data.status,
            provide_id:data.data.provide_id,
            accept_id:data.data.accept_id,
            image:data.data.image,
            serverUrl:app.globalData.serverUrl,
            good_id:options.good_id
          })
        }
        // 查找提供者??
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        wx.request({
          url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/User/getUserById',
          data: {
            id:that.data.accept_id
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            console.log(res);
            if(res.data.status==1){
              that.setData({
                accept_nickname:res.data.data.nickname,
                accept_phone:res.data.data.phone       
              })
            }
          },
          fail: function(res) {
            // fail
          }
        })
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
  // 去编辑页面
  toPublishInfoEdit:function(){
    wx.navigateTo({
      url: '../myPublishInfoEdit/myPublishInfoEdit?good_id='+this.data.good_id,
    })
  }
})