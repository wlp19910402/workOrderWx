Component({
  data: {
    selected: 0,
    color: "#7a7e83",
    roleId: '',
    selectedColor: "#303135",
    allList: [{
      list1: [{
        "pagePath":"/pages/index/index",
        "text":"首页",
        "iconPath":"/static/img/tabBarIcon/home-default.png",
        "selectedIconPath":"/static/img/tabBarIcon/home-active.png"
      },{
        "pagePath":"/pages/client/order/list/list",
        "text":"我的工单",
        "iconPath":"/static/img/tabBarIcon/order-default.png",
        "selectedIconPath":"/static/img/tabBarIcon/order-active.png"
      },{
        "pagePath":"/pages/my/my",
        "text":"个人中心",
        "iconPath":"/static/img/tabBarIcon/my-default.png",
        "selectedIconPath":"/static/img/tabBarIcon/my-active.png"
      }],
      list2: [{
        "pagePath":"/pages/index/index",
        "text":"首页",
        "iconPath":"/static/img/tabBarIcon/home-default.png",
        "selectedIconPath":"/static/img/tabBarIcon/home-active.png"
      },{
        "pagePath":"/pages/maintain/order/list/list",
        "text":"我的维修",
        "iconPath":"/static/img/tabBarIcon/order-default.png",
        "selectedIconPath":"/static/img/tabBarIcon/order-active.png"
      },{
        "pagePath":"/pages/my/my",
        "text":"个人中心",
        "iconPath":"/static/img/tabBarIcon/my-default.png",
        "selectedIconPath":"/static/img/tabBarIcon/my-active.png"
      }]
    }],
    list: []
  },
  attached() {
    const roleId = wx.getStorageSync('status')
    const isAdmin = wx.getStorageSync('isAdmin')
    if (isAdmin) {
      this.setData({
        list: this.data.allList[0].list2
      })
    }else{
      this.setData({
        list: this.data.allList[0].list1
      })
    }
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  },
})