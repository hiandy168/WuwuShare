// pages/myRent/myRent.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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