//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "bnrUrl": [
      {"url": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=56476020,2568292817&fm=26&gp=0.jpg"},
      {"url": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767863212,2793479283&fm=26&gp=0.jpg" },
      {"url": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3632687740,1444341615&fm=26&gp=0.jpg" }, 
      {"url": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767863212,2793479283&fm=26&gp=0.jpg"}
    ],
    arr:[
      {
        name:"素煎饼",
        icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569864256525&di=21a8cab22b478cbdf8c34ee35e3d8158&         imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2016%2F03%2F09%2F145752522970272996.jpg"
      },
      {
        name: "素煎饼",
        icon: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3621843402,383196837&fm=26&gp=0.jpg"
      },
      {
        name: "素煎饼",
        icon: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1294739773,905387555&fm=26&gp=0.jpg"
      },
      {
        name: "素煎饼",
        icon: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3598291216,3572988649&fm=26&gp=0.jpg"
      },
      {
        name: "素煎饼",
        icon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2232762011,2693690991&fm=26&gp=0.jpg"
      },
      {
        name: "素煎饼",
        icon: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=456396877,173020343&fm=26&gp=0.jpg"
      }
    ],
    //个人
    list:[
      {
        cardImg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3689828485,2667984774&fm=26&gp=0.jpg",
        cardtxt:"清涧县销售公司",
      },
      {
        cardImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=585467746,4251315944&fm=26&gp=0.jpg",
        cardtxt: "CEO:惠梁",
      },
      {
        cardImg: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4240739225,1922836200&fm=26&gp=0.jpg",
        cardtxt: "电话:13688886666",
      }
    ],
    // 特产详情
    tc:[
      {
        tcimg:"http://img4.imgtn.bdimg.com/it/u=2232762011,2693690991&fm=26&gp=0.jpg",
        nm:"清涧县黄河畔狗头枣",
        pirce:20,Num:"斤",
        number: 0
      },
      {
        tcimg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1171448446,2917585094&fm=26&gp=0.jpg",
        nm: "清涧县粉条",
        pirce: 25,Num:"捆",
        number: 0
      },
      {
        tcimg: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3767863212,2793479283&fm=26&gp=0.jpg",
        nm: "清涧县煎饼",
        pirce: 30,Num:"份",
        number:0
      }
    ]
  }, 
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
