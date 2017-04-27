//index.js
//获取应用实例
var util = require("../../utils/util.js");
var app = getApp()
Page({
  data: {
    listData:[],
    serverUrl:app.globalData.serverUrl,
    longitude:0,
    latitude:0,
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
        // console.log(res);
        if(res.data.status!=1){
          wx.showToast({
            title:"获取数据失败"
          })
        }
        // 填充数据
        if(res.data.data.length>10){
            var data = [];
            for(var i=res.data.data.length-1;i>res.data.data.length-10;i--){
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
        // 计算距离
        // 获取距离
        wx.getLocation({
          type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
          success: function(res){
            that.setData({
              longitude:res.longitude,
              latitude:res.latitude
            })
          },
          fail: function(res) {
            // fail
          },
        })

       for(var i=0;i<that.data.listData.length;i++){
        //  console.log(that);
          // console.log(that.data.listData[item]);
          var listItem = that.data.listData[i];
          var dist = util.Dist(listItem.longitude,listItem.latitude,that.data.longitude,that.data.latitude);
          // console.log(dist);
          that.data.listData[i].dist=dist;

       }
          var list = that.data.listData;
          that.setData({
            listData:list
          })
        
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
    // console.log(event.detail.value);
    var that =this;
    wx.request({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Good/find',
      data: {
        keywords:event.detail.value
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
        that.setData({
          listData:res.data.data
        })
      },
      fail: function(res) {
        // fail
      }
    })
  }
})
