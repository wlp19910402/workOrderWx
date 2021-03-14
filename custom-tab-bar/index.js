const app = getApp()
Component({
  data: {
    userInfo: null,
    selected: 0,
    color: "#7a7e83",
    selectedColor: "#303135",
    isAdmin: false,
    allList: [{
      list1: [{
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/static/img/tabBarIcon/home-default.png",
        "selectedIconPath": "/static/img/tabBarIcon/home-active.png"
      }, {
        "pagePath": "/pages/client/order/list/list",
        "text": "我的工单",
        "iconPath": "/static/img/tabBarIcon/order-default.png",
        "selectedIconPath": "/static/img/tabBarIcon/order-active.png"
      }, {
        "pagePath": "/pages/my/my",
        "text": "个人中心",
        "iconPath": "/static/img/tabBarIcon/my-default.png",
        "selectedIconPath": "/static/img/tabBarIcon/my-active.png"
      }],
      list2: [{
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/static/img/tabBarIcon/home-default.png",
        "selectedIconPath": "/static/img/tabBarIcon/home-active.png"
      }, {
        "pagePath": "/pages/client/order/list/list",
        "text": "我的工单",
        "iconPath": "/static/img/tabBarIcon/order-default.png",
        "selectedIconPath": "/static/img/tabBarIcon/order-active.png"
      }, {
        "pagePath": "/pages/maintain/order/list/list",
        "text": "我的工作",
        "iconPath": "/static/img/tabBarIcon/maintain-default.png",
        "selectedIconPath": "/static/img/tabBarIcon/maintain-active.png"
      }, {
        "pagePath": "/pages/my/my",
        "text": "个人中心",
        "iconPath": "/static/img/tabBarIcon/my-default.png",
        "selectedIconPath": "/static/img/tabBarIcon/my-active.png"
      }]
    }],
    list: []
  },
  attached() {
    this.setData({
      userInfo: wx.getStorageSync("userInfo"),
      isAdmin: wx.getStorageSync('isAdmin')
    })
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.initCustom()
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    },
    initCustom() {
      const isAdmin = wx.getStorageSync('isAdmin')
      if (isAdmin) {
        this.setData({
          list: this.data.allList[0].list2
        })
      } else {
        this.setData({
          list: this.data.allList[0].list1
        })
      }
    }
  },
  ready() {
    this.setData({
      userInfo: wx.getStorageSync("userInfo")
    })
    this.initCustom()
  },
  observers: {
    'isAdmin': function (isAdmin) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      if (isAdmin) {
        this.setData({
          list: this.data.allList[0].list2
        })
      } else {
        this.setData({
          list: this.data.allList[0].list1
        })
      }
    }
  }
})