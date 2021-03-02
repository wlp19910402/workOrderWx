const homeMenuModule = [{
    id: 0,
    name: "扫码",
    icon: "icon-saoma qm-menu-color1",
    link: "/pages/client/portfolio/scan/scan",
  },
  // {
  //   id: 1,
  //   name: "待接单",
  //   icon: "icon-comment ",
  //   link: "/pages/client/portfolio/scan/scan"
  // },
  {
    id: 2,
    name: "联系客服",
    icon: "icon-telephone qm-menu-color2",
    link: "/pages/common/contactTel/contactTel",
  }
  // {
  //   id: 3,
  //   name: "日志",
  //   icon: "icon-comment",
  //   link: "/pages/logs/logs"
  // }
]
Page({
  data: {
    background: ['/static/img/home/banner2.jpg', '/static/img/home/banner1.jpg', '/static/img/home/banner3.jpg'],
    adBannder: ['/static/img/home/ad-banner4.jpg', '/static/img/home/ad-banner1.jpg', '/static/img/home/ad-banner5.jpg'],
    indicatorDots: true,
    vertical: true,
    circular: true,
    autoplay: false,
    interval: 2000,
    duration: 500,
    homeMenuModule: homeMenuModule
  },
  dingyue:function(){
    wx.requestSubscribeMessage({
      tmplIds: ["Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4"],
      complete: function (rdes) {
        console.log("订阅信息", rdes)
      }
    })
  },
  clickHomeMenu: (e) => {
    var $id = e.currentTarget.dataset.id;
    if ($id === 0) {
      wx.scanCode({
        complete: (res) => {
         /** TODO 根据扫码结果判断是否符合要求再进行调整到档案页面 */
          if (res.result) {
            wx.navigateTo({
              url: '/pages/client/portfolio/scan/scan?qrCode=' + res.result,
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: homeMenuModule.find(item => item.id === $id).link,
      })
    }
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  }
})