const wxRequest = require('../../utils/request.js')
const API = require('../../utils/API.js')
const app = getApp()
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
    homeMenuModule: [{
        id: 0,
        name: "扫码",
        icon: "icon-saoma qm-menu-color1",
        link: "/pages/client/portfolio/scan/scan",
      },
      {
        id: 2,
        name: "联系客服",
        icon: "icon-telephone qm-menu-color2",
        link: "/pages/common/contactTel/contactTel",
      }
    ],
    pdCount: 0,
    isAdmin: false
  },
  clickHomeMenu(e) {
    const that = this
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
        url: that.data.homeMenuModule.find(item => item.id === $id).link,
      })
    }
  },
  onLoad() {
    if (wx.getStorageSync('isAdmin') && app.globalData.userInfo) {
      this.initData();
    }
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  jumpPdList() {
    wx.switchTab({
      url: '/pages/maintain/order/list/list'
    })
  },
  initData() {
    wx.showLoading({
      title: '加载中...',
    })
    wxRequest(API.ORDER_COUNT, null, 'GET', (res) => {
      this.setData({
        pdCount: res.data.data.pdCount,
        isAdmin: wx.getStorageSync('isAdmin')
      })
      app.globalData.orderCount = res.data.data
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    })
  },
  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
    this.initData();
  }
})