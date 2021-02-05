Page({
  data: {
    background: ['/static/img/home/banner2.jpg', '/static/img/home/banner1.jpg', '/static/img/home/banner3.jpg'],
    indicatorDots: true,
    vertical: true,
    circular: true,
    autoplay: false,
    interval: 2000,
    duration: 500,
    homeMenuModule: [{
        name: "报修",
        icon: "icon-operation qm-menu-color1",
        link: "/pages/client/order/create/create",
      },
      {
        name: "日志",
        icon: "icon-comment",
        link: "/pages/logs/logs"
      }
    ]
  },
  linkNavigator(url) {
    console.log(url)
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  }
})