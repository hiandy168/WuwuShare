var util = require("../../utils/util.js");
var app = getApp();
Page({
  data:{
      serverUrl:app.globalData.serverUrl,
      good_id:"",
      image:"",
      rent:"",
      deposit:"",
      desc:"",
      longitude:"",
      latitude:"",
      address:"",
      phone:"",
      dist:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    var that = this;
    if(options.good_id){
        wx.request({
          url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Good/select',
          data: {
            id:options.good_id
            },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            // success
            if(res.data.status!=1){
                wx.showToast({
                    title:"信息获取失败"
                })
            }
            console.log(res.data);
            var data = res.data.data;
            that.setData({
                good_id:data.good_id,
                image:data.image,
                rent:data.rent,
                desc:data.desc,
                deposit:data.deposit,
                longitude:data.longitude,
                latitude:data.latidude,
                address:data.address,
                phone:data.phone,
                dist:options.dist
            })

          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
    }
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
  //申请租用
  rent:function(){
     // 判断登录状态
        if(!util.isLogin()){
          wx.showToast({
            title:"您还未登陆"
          })
          return;
        }
     // 处于登陆状态
    var that =this;
    wx.request({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Good/rent',
      data: {
        user_id:app.data.userInfo.user_id,
        good_id:that.data.good_id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data);
          wx.showToast({
            title:res.data.message,
          })
      },
      fail: function(res) {
        // fail
      }
    })
  },
  showModal:function(event){
    console.log(event);
    wx.showModal({
      title:event.currentTarget.dataset.title,
      content:event.currentTarget.dataset.content,
    })
  }
})