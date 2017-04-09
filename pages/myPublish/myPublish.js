// pages/myPublish/myPublish.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  toPublishInfo:function(){
    wx.navigateTo({
      url: '../myPublishInfo/myPublishInfo'
    })
  }
})