//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    listData:[
      
    ],
    serverUrl:app.globalData.serverUrl
  },
  // 初始化
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Good/select',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res);
        if(res.data.status!=1){
          wx.showToast({
            title:"获取数据失败"
          })
        }
        if(res.data.data.length>10){
            var data = [];
            for(var i=0;i<10;i++){
                data.push(res.data.data[i])
            }
            that.setData({
              listData:data
            })
        }else{
          that.setData({
            listData:res.data.data
          })
        }
      },
      fail: function(res) {
         wx.showToast({
            title:"获取数据失败"
          })
      },
      complete: function(res) {
        // complete
      }
    })
  },
  toDetail:function(event){
    var good_id = event.currentTarget.dataset.good_id;
    var that = this;
   wx.navigateTo({
          url: '../detail/detail?good_id='+good_id,
        })
  },
  // 搜索框输入完成
  searchconfirm:function(event){
    console.log(event.detail.value);
  }
})
