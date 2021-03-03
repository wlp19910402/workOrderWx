const homeMenuModule = [{
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
]
const subscriptionsSetting = require('../../utils/subscriptionsSetting.js')
const wxRequest = require('../../utils/request.js')
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
    homeMenuModule: homeMenuModule,
    totalData:0,
    isAdmin:false
  },
  clickHomeMenu: (e) => {
    var $id = e.currentTarget.dataset.id;
    if ($id === 0) {
      subscriptionsSetting(()=>{
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
  },
  onLoad(){
    this.initData()
  },
  jumpPdList(){
    console.log(111111)
    // wx.navigateTo({
    //   url: '/pages/maintain/order/list/list?type=pd',
    // })
    wx.switchTab({ url:'/pages/maintain/order/list/list?type=pd&id=12111' })
  },
  initData(){
    let isAdmin=wx.getStorageSync('isAdmin')
    this.setData({
      isAdmin
    })
    if(isAdmin){
      wx.showLoading({
        title: '加载中...',
      })
      wxRequest('wx-api/work-order/my-maintain-list/pd', {
        pageSize: 1,
        pageNo: 1
      }, 'GET', (res) => {
        this.setData({
          totalData: res.data.data.total
        })
        wx.hideLoading()
        wx.stopPullDownRefresh();
        wx.hideNavigationBarLoading();
      })
    }
  },
  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
    this.initData();
  },
  
})


