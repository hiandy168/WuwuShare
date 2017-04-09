//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    listData:[
      {
          id:"1",
          img:"../../img/shareTh.jpg",
          name:"小米mix",
          rent:"400",
          preRent:"20"
      },{
          id:"2",
          img:"../../img/shareTh.jpg",
          name:"小米mix",
          rent:"400",
          preRent:"20"
      },{
        id:"3",
          img:"../../img/shareTh.jpg",
          name:"小米mix",
          rent:"400",
          preRent:"20"
      },{
        id:"4",
          img:"../../img/shareTh.jpg",
          name:"小米mix",
          rent:"400",
          preRent:"20"
      },{
        id:"5",
          img:"../../img/shareTh.jpg",
          name:"小米mix",
          rent:"400",
          preRent:"20"
      },{
        id:"6",
          img:"../../img/shareTh.jpg",
          name:"小米mix",
          rent:"400",
          preRent:"20"
      }
      
    ]
  },
  // 初始化
  onLoad: function () {
    
  },
  toDetail:function(event){
    console.log(event.currentTarget.dataset.itemid);
    var itemid = event.currentTarget.dataset.itemid;
    var that = this;
    for(var i=0;i<that.data.listData.length;i++){
        if(that.data.listData.id==itemid){
            console.log(that.data.listDat[i]);
        }
    }
   wx.navigateTo({
          url: '../detail/detail?itemid='+itemid,
        })
  }
})
