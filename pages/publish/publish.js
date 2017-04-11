//获取应用实例
var app = getApp()
Page({
  data: {
    count:'400',
    name:"",
    desc:"",
    rent:"",
    preRent:"",
    rel:"",
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
    console.log( event.detail.value);
  },
  formReset:function(){
    
  },
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
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})
