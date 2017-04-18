var app = getApp();
Page({
  data:{
      good_id:null,
      good_info:null,
      serverUrl:app.globalData.serverUrl,
      address:"",
      tel:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // console.log(options);
    var that = this;
    if(options.good_id){
        wx.request({
          url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Good/select',
          data: {id:options.good_id},
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
            that.setData({
                good_info:res.data.data
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
  showModal:function(event){
    console.log(event);
    wx.showModal({
      title:event.currentTarget.dataset.title,
      content:event.currentTarget.dataset.content,
    })
  }
})