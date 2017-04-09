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
    img:[]
  },
  // 初始化
  onLoad: function () {
    
  },
  publishNameBlur:function(event){
      var name = event.detail.value;
      this.setData({
        name:name
      })
      console.log(this.data.name);
  },
  publishDescBlur:function(event){
      var desc = event.detail.value;
      this.setData({
        desc:desc
      })
       console.log(this.data.desc);
  },
  publishRentBlur:function(event){
  var rent = event.detail.value;
        this.setData({
          rent:rent
        })
         console.log(this.data.rent);
  },
  publishPrerentBlur:function(event){
       var preRent = event.detail.value;
      this.setData({
        preRent:preRent
      })
       console.log(this.data.preRent);
  },
  publishTelBlur:function(event){
      var tel = event.detail.value;
      this.setData({
        tel:tel
      })
       console.log(this.data.tel);
  },
  // 添加图片
  addPic:function(){
      var that = this;  
    wx.chooseImage({   
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {  
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
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
  publish:function(){
    console.log(this.data);
    wx.showModal({
      title:"提交数据",
      content:"名称："+this.data.name
    })
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
                that.data.img.length=that.data.img.length-1;;
                console.log(that.data.img);
                return;
            }
          }
        }
      }
    })
  }
})
