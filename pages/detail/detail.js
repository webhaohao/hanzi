// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowBottom:true,
    scale:true,
    hidden:false,
    count:0,
    x:0,
    y:0,
    //movable-view width height
    viewWidth:802,
    viewHeight:596,
    scale_value:0.5,
    //赵元任
    list_0:{
      title:'../img/title01.svg',
      text:'汉字里的轻声',
      viewWidth:802,
      viewHeight:596,
      res:[
        {
           src:'https://www.happyhao.top/img/r24.svg',
           top:0,
           left:356,
           width:125,
           height:125,
           className:'rotate' 
        },
        {
          src:'https://www.happyhao.top/img/r6.svg',
          top:213,
          left:260,
          zindex:20,
          width:323,
          height:358,
          className:'heart' 
       },
      {
          src:'https://www.happyhao.top/img/r1.png',
          top:100,
          left:440
      },
      {
          src:'https://www.happyhao.top/img/r16.svg',
          top:159,
          left:528 
      },
      {
          src:'https://www.happyhao.top/img/r30.svg',
          top:267,
          left:46,
          className:'move' 
      },
      {
        src:'https://www.happyhao.top/img/r21.svg',
        top:39,
        left:183,
        className:'drift' 
      },
      {
        src:'https://www.happyhao.top/img/r33.png',
        top:396,
        left:467
      },
      {
        src:'https://www.happyhao.top/img/r18.svg',
        top:140,
        left:440,
        width:90,
        height:126,
        className:'heart' 
      },
      {
        src:'https://www.happyhao.top/img/r8.png',
        top:274,
        left:563
      },
      {
        src:'https://www.happyhao.top/img/r27.svg',
        top:100,
        left:20,
        width:278,
        height:243
      },
      {
        src:'https://www.happyhao.top/img/r28.svg',
        top:99,
        left:40,
        width:70,
        height:33
      },
      {
        src:'https://www.happyhao.top/img/r31.svg',
        top:256,
        left:30,
        width:52,
        height:103
      },
      {
        src:'https://www.happyhao.top/img/r29.svg',
        top:312,
        left:68,
        width:56,
        height:10
      },
      {
        src:'https://www.happyhao.top/img/r39.svg',
        top:32,
        left:391,
        width:68,
        height:71,
        zindex:20
      },
      {
        src:'https://www.happyhao.top/img/r13.svg',
        top:40,
        left:540,
        width:68,
        height:135,
        zindex:20
      },
      {
        src:'https://www.happyhao.top/img/r12.svg',
        top:130,
        left:578,
        width:55,
        height:62,
        zindex:20
      }
    ]
    },
    //萧刚
    list_1:{
        title:'../img/title02.svg',
        text:'被打乱的汉字对阅读的影响',
        viewWidth:870,
        viewHeight:596,
        res:[
          {
            src:'https://www.happyhao.top/img2/r120.svg',
            top:58,
            left:58,
            width:450,
            height:447
          },
          {
            src:'https://www.happyhao.top/img2/r122.svg',
            top:145,
            left:272,
            width:370,
            height:249,
            zindex:20
          },
          {
            src:'https://www.happyhao.top/img2/r106.svg',
            top:142,
            left:458,
            width:370,
            height:249
          },
          {
            src:'https://www.happyhao.top/img2/r111.svg',
            top:85,
            left:46,
            width:266,
            height:273,
            className:'heart'
          },
          {
            src:'https://www.happyhao.top/img2/r109.svg',
            top:380,
            left:13,
            width:77,
            height:162
          },
          {
            src:'https://www.happyhao.top/img2/r117.svg',
            top:10,
            left:282,
            width:187,
            height:190,
            className:'rotate'
          },
          {
            src:'https://www.happyhao.top/img2/r117.svg',
            top:71,
            left:501,
            width:187,
            height:190,
            className:'rotate',
            zindex:30
          },
          {
            src:'https://www.happyhao.top/img2/r107.svg',
            top:40,
            left:683,
            width:190,
            height:190,
            zindex:30,
            className:'floatMove'
          },
          {
            src:'https://www.happyhao.top/img2/r105.svg',
            top:213,
            left:697,
            width:120,
            height:190,
            zindex:50
          },
          {
            src:'https://www.happyhao.top/img2/r108.svg',
            top:372,
            left:497,
            width:204,
            height:171,
            zindex:30,
            className:'swing-1'
          },
          {
            src:'https://www.happyhao.top/img2/r110.svg',
            top:379,
            left:70,
            width:75,
            height:154
          },
          {
            src:'https://www.happyhao.top/img2/r104.svg',
            top:375,
            left:773,
            width:88,
            height:51
          },
          {
            src:'https://www.happyhao.top/img2/r118.svg',
            top:38,
            left:450,
            width:15,
            height:57
          },
          {
            src:'https://www.happyhao.top/img2/r121.svg',
            top:98,
            left:670,
            width:15,
            height:57
          },
          {
            src:'https://www.happyhao.top/img2/r115.svg',
            top:240,
            left:464,
            width:33,
            height:24,
            zindex:50
          }
        ]
    },
    //黄庭坚
    list_2:{
        title:'../img/title03.svg',
        text:'拆白道字',
        viewWidth:801,
        viewHeight:595,
        res:[
          {
            src:'https://www.happyhao.top/img3/r81.svg',
            top:85,
            left:120,
            width:104,
            height:95,
            className:'cloudMove'
          },
          {
            src:'https://www.happyhao.top/img3/r74.svg',
            top:290,
            left:470,
            width:228,
            height:161,
            className:'cloudMoves'
          },
          {
            src:'https://www.happyhao.top/img3/r69.svg',
            top:67,
            left:93,
            width:472,
            height:472
          },
          {
            src:'https://www.happyhao.top/img3/r68.svg',
            top:129,
            left:83,
            width:297,
            height:284,
            className:'heart'
          },
          {
            src:'https://www.happyhao.top/img3/r70.svg',
            top:29,
            left:290,
            width:189,
            height:158,
            zindex:50
          },
          {
            src:'https://www.happyhao.top/img3/r71.svg',
            top:62,
            left:443,
            width:119,
            height:145
          },
          {
            src:'https://www.happyhao.top/img3/r72.svg',
            top:48,
            left:565,
            width:66,
            height:162
          },
          {
            src:'https://www.happyhao.top/img3/r73.svg',
            top:432,
            left:656,
            width:127,
            height:115
          },
          {
            src:'https://www.happyhao.top/img3/r75.svg',
            top:38,
            left:615,
            width:125,
            height:265
          },
          {
            src:'https://www.happyhao.top/img3/r76.svg',
            top:218,
            left:490,
            width:137,
            height:40
          },
          {
            src:'https://www.happyhao.top/img3/r77.svg',
            top:172,
            left:418,
            width:138,
            height:181
          },
          {
            src:'https://www.happyhao.top/img3/r78.svg',
            top:440,
            left:480,
            width:161,
            height:116
          },
          {
            src:'https://www.happyhao.top/img3/r79.svg',
            top:287,
            left:308,
            width:350,
            height:272,
            zindex:30
          },
          {
            src:'https://www.happyhao.top/img3/r80.svg',
            top:70,
            left:255,
            width:206,
            height:505
          },
          {
            src:'https://www.happyhao.top/img3/r82.svg',
            top:372,
            left:20,
            width:232,
            height:160,
            className:'heart'
          },
        ]
    },
    //张德彝
    list_3:{
       title:'../img/title04.svg',
       text:'标点符号初解',
       viewWidth:870,
       viewHeight:596,
       res:[
        {
          src:'https://www.happyhao.top/img4/r93.svg',
          top:0,
          left:15,
          width:444,
          height:596
        },  
        {
          src:'https://www.happyhao.top/img4/r94.svg',
          top:328,
          left:55,
          width:227,
          height:232 
        },
        {
          src:'https://www.happyhao.top/img4/r96.svg',
          top:345,
          left:390,
          width:205,
          height:211
        },
        {
          src:'https://www.happyhao.top/img4/r91.svg',
          top:230,
          left:565,
          width:189,
          height:189
        }, 
        {
          src:'https://www.happyhao.top/img4/r90.svg',
          top:27,
          left:525,
          width:54,
          height:137
        },
        {
          src:'https://www.happyhao.top/img4/r99.svg',
          top:197,
          left:670,
          width:197,
          height:190
        },
        {
          src:'https://www.happyhao.top/img4/r98.svg',
          top:318,
          left:287,
          width:563,
          height:178
        },
        {
          src:'https://www.happyhao.top/img4/r97.svg',
          top:455,
          left:680,
          width:150,
          height:147
        },
        {
          src:'https://www.happyhao.top/img4/r85.svg',
          top:430,
          left:130,
          width:369,
          height:373
        },
        {
          src:'https://www.happyhao.top/img4/r92.svg',
          top:500,
          left:481,
          width:219,
          height:98
        },
        {
          src:'https://www.happyhao.top/img4/r86.svg',
          top:49,
          left:360,
          width:427,
          height:314
        },
        {
          src:'https://www.happyhao.top/img4/r89.svg',
          top:15,
          left:294,
          width:286,
          height:209
        },
        {
          src:'https://www.happyhao.top/img4/r95.svg',
          top:464,
          left:20,
          width:55,
          height:93
        },
        {
          src:'https://www.happyhao.top/img4/r84.svg',
          top:25,
          left:795,
          width:47,
          height:99
        },
        {
          src:'https://www.happyhao.top/img4/r100.svg',
          top:180,
          left:720,
          width:14,
          height:100,
          className:'tada animated infinite slow'
        }
       ] 
    },
    //王羲之
    list_4:{
        title:'../img/title05.svg',
        text:'汉字笔画冗余探究',
        viewWidth:801,
        viewHeight:596,
        res:[
          {
            src:'https://www.happyhao.top/img5/r53.svg',
            top:65,
            left:139,
            width:476,
            height:491
          },
          {
            src:'https://www.happyhao.top/img5/r52.svg',
            top:65,
            left:240,
            width:322,
            height:434,
            className:'heart'
          },
          {
            src:'https://www.happyhao.top/img5/r65.svg',
            top:113,
            left:524,
            width:322,
            height:434
          },
          {
            src:'https://www.happyhao.top/img5/r58.svg',
            top:178,
            left:443,
            width:158,
            height:75
          },
          {
            src:'https://www.happyhao.top/img5/r64.svg',
            top:0,
            left:7,
            width:294,
            height:269,
            zindex:30
          },
          // {
          //   src:'https://www.happyhao.top/img5/r61.svg',
          //   top:71,
          //   left:288,
          //   width:106,
          //   height:71
          // },
          {
            src:'https://www.happyhao.top/img5/r48.svg',
            top:12,
            left:198,
            width:328,
            height:175
          },
          {
            src:'https://www.happyhao.top/img5/r57.svg',
            top:300,
            left:82,
            width:189,
            height:64
          },
          {
            src:'https://www.happyhao.top/img5/r43.svg',
            top:143,
            left:326,
            width:260,
            height:409
          },
          {
            src:'https://www.happyhao.top/img5/r55.svg',
            top:360,
            left:85,
            width:192,
            height:158
          },
          {
            src:'https://www.happyhao.top/img5/r56.svg',
            top:200,
            left:45,
            width:164,
            height:105
          },
          {
            src:'https://www.happyhao.top/img5/r51.svg',
            top:47,
            left:506,
            width:105,
            height:96,
            zindex:-10,
            className:'cloudRightMove'
          },
          {
            src:'https://www.happyhao.top/img5/r51.svg',
            top:420,
            left:256,
            width:105,
            height:96,
            className:'cloudMove'
          },
          {
            src:'https://www.happyhao.top/img5/r49.svg',
            top:20,
            left:370,
            width:48,
            height:64
          },
          {
            src:'https://www.happyhao.top/img5/r61.svg',
            top:71,
            left:444,
            width:106,
            height:71,
            className:'fly-1'
          },
          {
            src:'https://www.happyhao.top/img5/r50.svg',
            top:0,
            left:287,
            width:125,
            height:123,
            className:'fly-2'
          }
        ]
    },
    res:[
    ],
    title:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
      switch(options.name){
          case '赵元任':
          this.setData({
              res:this.data.list_0.res,
              title:this.data.list_0.title,
              viewHeight:this.data.list_0.viewHeight,
              viewWidth:this.data.list_0.viewWidth,
              isShowBottom:false
          })
          wx.setNavigationBarTitle({
              title: this.data.list_0.text
          })
          break;
          case '萧纲':
          this.setData({
            res:this.data.list_1.res,
            title:this.data.list_1.title,
            viewHeight:this.data.list_1.viewHeight,
            viewWidth:this.data.list_1.viewWidth
          })
          wx.setNavigationBarTitle({
              title: this.data.list_1.text
          })
          break;
          case '王羲之':
          this.setData({
            res:this.data.list_4.res,
            title:this.data.list_4.title,
            viewHeight:this.data.list_4.viewHeight,
            viewWidth:this.data.list_4.viewWidth
          })
          wx.setNavigationBarTitle({
              title: this.data.list_4.text
          })
          break;
          case '张德彝':
          this.setData({
             res:this.data.list_3.res,
             title:this.data.list_3.title,
             viewHeight:this.data.list_3.viewHeight,
             viewWidth:this.data.list_3.viewWidth
          })
          wx.setNavigationBarTitle({
            title: this.data.list_3.text
          })
          break;
          //黄庭坚
          default:
          this.setData({
            res:this.data.list_2.res,
            title:this.data.list_2.title,
            viewHeight:this.data.list_2.viewHeight,
            viewWidth:this.data.list_2.viewWidth
         })
         wx.setNavigationBarTitle({
           title: this.data.list_2.text
         })

      }
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
    // imageSize[e.target.dataset.index] = {
    //     width:viewWidth,
    //     height:viewHeight
    // }
    // this.setData({
    //     imageSize:imageSize
    // })
    var imgWidth=e.detail.width;
    var imgHeight=e.detail.height;
    if(!this.data.res[e.target.dataset.index].width&&!this.data.res[e.target.dataset.index].height){
      this.data.res[e.target.dataset.index].width=imgWidth;
      this.data.res[e.target.dataset.index].height=imgHeight;
    }
    console.log(this.data.res);
    this.setData({
        res:this.data.res
    })
    this.data.count++;
    if(this.data.count==this.data.res.length){
        this.setData({
            hidden:true,
            scale_value:1
        })
    }
}
})