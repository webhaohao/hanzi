// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        src: '../img/p19.png',
        name:'王羲之'
      },
      {
        src: '../img/p20.png',
        name:'萧纲'
      },
      {
        src: '../img/p22.png',
        name:'张德彝'
      },
      {
        src: '../img/p23.png',
        name:'赵元任'
      },
      {
        src: '../img/p24.png',
        name:'黄庭坚'
      }
    ],
    currentUrl:'',
    index:0,
    name:'王羲之'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        console.log(options);
        this.data.index=options.index;
        wx.setNavigationBarTitle({
          title: this.data.imgUrls[options.index].name
        })
        this.setData({
            currentUrl:this.data.imgUrls[options.index].src,
            name:this.data.imgUrls[options.index].name
        })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log(this.data.count,this.data.res.length);
   
    
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
  jump:function(e){
    wx.navigateTo({
      url: '../detail/detail?index='+this.data.index+'&name='+this.data.name
    })
  },
  back:function(e){
    wx.navigateBack({
      delta: 1
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