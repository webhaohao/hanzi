// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i:0,
    circular:true,
    duration:1000,
    imgUrls: [
      {
        src: '../img/i47.png',
        name:'王羲之'
      },
      {
        src: '../img/i48.png',
        name:'萧纲'
      },
      {
        src: '../img/i49.png',
        name:'张德彝'
      },
      {
        src: '../img/i50.png',
        name:'赵元任'
      },
      {
        src: '../img/i51.png',
        name:'黄庭坚'
      }
    ],
    isActive:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log(this.data.count,this.data.res.length);
   
     this.setData({
          isActive:true
     }) 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  swiper:function(e){
    var index = e.detail.current
    this.setData({
        i: index
    })
  },
  handle:function(e){
    console.log(e);
    var index = e.target.dataset.index
    var name = e.target.dataset.name
    wx.navigateTo({
      url: '../person/person?index='+index+'&name='+name
    })
  },
  imageLoad:function(e){
    //单位rpx
    // console.log(e);
    //var originWidth = e.detail.width*px2rpx, 
    //originHeight = e.detail.height*px2rpx,
    // ratio = originWidth/originHeight;
    // var viewWidth = 710,viewHeight//设定一个初始宽度
    // //当它的宽度大于初始宽度时，实际效果跟mode=widthFix一致
    // if(originWidth>= viewWidth){
    //     //宽度等于viewWidth,只需要求出高度就能实现自适应
    //     viewHeight = viewWidth/ratio;
    // }else{
    //     //如果宽度小于初始值，这时就不要缩放了
    //     viewWidth = originWidth;
    //     viewHeight = originHeight;
    // }
    // var imageSize = this.data.imageSize;
    console.log(e.detail.width);
    var urls=this.data.imgUrls;
    urls[e.target.dataset.index].width = e.detail.width,
    urls[e.target.dataset.index].height=e.detail.height;
    this.setData({
        imgUrls:urls
    })
  } 
})