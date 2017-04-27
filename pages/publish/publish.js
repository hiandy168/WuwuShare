//获取应用实例
var util = require("../../utils/util.js");
var app = getApp()

Page({
  data: {
    title:"",
    desc:"",
    rent:"",
    deposit:"",
    address:"",
    longitude:"",
    latitude:"",
    img:[]
  },
  // 初始化
  onLoad: function () {
    
  },
  // 添加图片
  addPic:function(){
      var that = this;  
    wx.chooseImage({   
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {  
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        // that.data.img.concat(res.tempFilePaths);
        that.setData({  
          img:that.data.img.concat(res.tempFilePaths)
        })  
        console.log(that.data.img);
      },
      fail:function(res){
          console.log(res)
      }
    })  
  },
  //发布
  formSubmit:function(event){
    // 判断登录状态
        if(!util.isLogin()){
          wx.showToast({
            title:"您还未登陆"
          })
          return;
        }
     // 处于登陆状态
    // console.log(event.detail.value);
    var that = this;
    var data = event.detail.value;
    console.log(that);
    wx.uploadFile({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Good/insert',
      filePath:that.data.img[0],
      name:'name',
      header: {
          "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header
      formData: {
          title:data.title,
          desc:data.desc,
          deposit:data.deposit,
          rent:data.rent,
          latitude:that.latitude,
          longitude:that.longitude,
          provide_id:app.data.userInfo.user_id //测试，实际用app.globalData.userInfo.id

      }, // HTTP 请求中其他额外的 form data
      success: function(res){
        // success
        console.log(res);
        // 发布成功
        if(JSON.parse(res.data).status==1){
            wx.showToast({
              title:"发布成功",
              icon:"success"
            })
            // 清空输入
          //   that.setData({
          //     title:"",
          //     desc:"",
          //     rent:"",
          //     deposit:"",
          //     address:"",
          //     longitude:"",
          //     latitude:"",
          //     img:[]
          // })
        }
        // 发布失败
        else{
          wx.showToast({
              title:"发布失败",
              icon:"success"
            })
        }
      },
      fail: function(res) {
        // fail
      }
    })
  },
  // 删除图片
  delImg:function(event){
    var that = this;
    wx.showModal({
      title:"删除图片？",
      success:function(res){
        if(res.confirm){
          console.log(event.currentTarget.dataset.id);
          for(var i=0;i<that.data.img.length;i++){
            if(that.data.img[i]==event.currentTarget.dataset.id){
                for(var j = i;j<that.data.img.length;j++){
                  that.data.img[j]=that.data.img[j+1];
                }
                that.data.img.length=that.data.img.length-1;
                that.setData({
                  img:that.data.img
                })
                console.log(that.data.img);
                return;
            }
          }
        }
      }
    })
  },
  toMap:function(){
    var that = this;
    wx.chooseLocation({
      success: function(res){
        that.setData({
          address:res.address,
          longitude:res.longitude,
          latitude:res.latitude
        })
        console.log(that);
      },
      fail: function(res) {
        // fail
      },
    })
  }
})
