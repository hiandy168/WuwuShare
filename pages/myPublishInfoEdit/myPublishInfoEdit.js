// pages/myPublishInfoEdit/myPublishInfoEdit.js
var app = getApp()
Page({
  data: {
    title:"",
    rent:"",
    deposit:"",
    desc:"",
    phone:"",
    status:null,
    provide_id:null,
    accept_id:0,
    image:"",
    serverUrl:app.globalData.serverUrl,
    good_id:""
  },
  // 初始化
  onLoad: function (options) {
    var that = this
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
            title:data.data.title,
            rent:data.data.rent,
            deposit:data.data.deposit,
            desc:data.data.desc,
            phone:data.data.phone,
            status:data.data.status,
            provide_id:data.data.provide_id,
            accept_id:data.data.accept_id,
            good_id:options.good_id,
            serverUrl:app.globalData.serverUrl,
          })
          // 下载图片
          wx.downloadFile({
            url: that.data.serverUrl + data.data.image,
            type: 'image', // 下载资源的类型，用于客户端识别处理，有效值：image/audio/video
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            }, // 设置请求的 header
            success: function(res){
              // success
              that.setData({
                image:res.tempFilePath
              })
            },
            fail: function(res) {
              // fail
              wx.showToast({
                title:"加载图片失败"
              })
            }
          })
        }
        // 查找提供者??
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })


  },
  // 添加图片
  addPic:function(){
      var that = this;  
    wx.chooseImage({   
      count:1,
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {  
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        console.log(res);
        that.setData({  
          image:res.tempFilePaths[0]
        })  
        // console.log(that.data.img);
      },
      fail:function(res){
          // console.log(res)
      }
    })  
  },
    // 删除图片
  // delImg:function(event){
  //   var that =this;
  //   wx.showModal({
  //     title:"删除图片？",
  //     success:function(res){
  //       if(res.confirm){
  //         that.setData({
  //           image:""
  //         })
  //         // console.log(event.currentTarget.dataset.id);
  //         // for(var i=0;i<that.data.img.length;i++){
  //         //   if(that.data.img[i]==event.currentTarget.dataset.id){
  //         //       for(var j = i;j<that.data.img.length;j++){
  //         //         that.data.img[j]=that.data.img[j+1];
  //         //       }
  //         //       that.data.img.length=that.data.img.length-1;;
  //         //       console.log(that.data.img);
  //         //       return;
  //         //   }
  //         // }
  //       }
  //     }
  //   })
  // },
  //修改完成
  formSubmit:function(event){
    // console.log(event.detail.value);
    // console.log(this.data);
    var data = event.detail.value;
    var that = this;
    wx.uploadFile({
      url: 'http://www.zjlcloud.cn/test1.0/index.php/Home/Good/update',
      filePath:that.data.image,
      name:'name',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header
      formData: {
        id:that.data.good_id,
        title:data.title,
        desc:data.desc,
        rent:data.rent,
        deposit:data.deposit,
        phone:data.deposit
      }, // HTTP 请求中其他额外的 form data
      success: function(res){
        // success
        // console.log(JSON.parse(res.data).stutus);
        if(JSON.parse(res.data).status==1){
          wx.showToast({
            title:"修改成功",
            icon:"success"
          })
          wx.navigateBack({
            delta: 2, // 回退前 delta(默认为1) 页面
          })
        }
      },
      fail: function(res) {
        // fail
        console.log(res);
      },
      complete: function(res) {
        // complete
        console.log(res);
      }
    })
  },
})
