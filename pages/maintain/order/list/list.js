const wxRequest = require('../../../../utils/request.js')
const API = require("../../../../utils/API.js")
const app = getApp()
const subscriptionsSetting = require('../../../../utils/subscriptionsSetting.js')
Page({
  onShareAppMessage() {
    return {
      title: 'tabs',
      path: 'page/weui/example/tabs/tabs'
    }
  },
  data: {
    inputShowed: false,
    whetherLast: false,
    userId: null,
    inputVal: "",
    imgNull: "/static/img/images-null.png",
    tabs: [{
        title: '全部',
        value: "all"
      },
      {
        title: '待接单',
        value: "pd"
      },
      {
        title: '进行中',
        value: "jd"
      },
      {
        title: '我的支持',
        value: "zc"
      },
      {
        title: '已结单',
        value: "wc"
      }
    ],
    activeTab: 0,
    consumableList: [],
    currentPage: 1,
    totalData: 0,
    pageSize: 10
  },
  onLoad(options) {
    this.setData({
      userId: app.globalData.userId
    })
    wx.showLoading({
      title: '加载中...',
    })
    this.fetchList({
      pageNo: 1
    })
  },
  /**
   * @param {*} params 查询列表的参数值
   * @param {*} isRefresh 是否是刷新
   */
  fetchList: function (params, isRefresh = false) {
    let that = this
    if (isRefresh) {
      this.setData({
        consumableList: []
      })
    }
    wxRequest(API.ORDER_MAINTAIN_LIST + '/' + that.data.tabs[that.data.activeTab].value, {
      pageSize: that.data.pageSize,
      pageNo: that.data.currentPage,
      ...params
    }, 'GET', (res) => {
      if (res.data.data.total <= res.data.data.current * that.data.pageSize) {
        this.setData({
          whetherLast: true
        })
      } else {
        this.setData({
          whetherLast: false
        })
      }
      this.setData({
        consumableList: isRefresh ? [...res.data.data.records] : [...that.data.consumableList, ...res.data.data.records],
        totalData: res.data.data.total,
        currentPage: res.data.data.current
      })
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    })
  },
  onTabClick: function (e) {
    const index = e.detail.index
    this.setData({
      activeTab: index
    })
    wx.showLoading({
      title: '加载中...',
    })
    this.fetchList({
      pageNo: 1
    }, true)
  },
  onChange(e) {
    const index = e.detail.index
    this.setData({
      activeTab: index
    })
  },
  handleClick(e) {
    wx.navigateTo({
      url: './webview',
    })
  },
  jdOrder(e) {

    const id = e.currentTarget.dataset.id;
    const that = this
    subscriptionsSetting(() => {
      wx.showModal({
        title: "提示",
        content: "请确认是否接单？",
        confirmColor: "#46b989",
        confirmText: "确认",
        success: (res) => {
          if (res.confirm) {
            wx.showLoading({
              title: '接单中...',
            })
            wxRequest(API.ORDER_MAINTAIN_JD + '/' + e.currentTarget.dataset.id, null, 'POST', (res) => {
              wx.showToast({
                title: '接单成功',
                icon: 'success',
                duration: 3000,
              })
              const newList = that.data.consumableList.map(item => {
                if (item.id === id) {
                  return {
                    ...item,
                    status: 'jd'
                  }
                }
                return item
              }).filter(item => {
                if (that.data.tabs[that.data.activeTab].value === 'all') {
                  return item
                }
                if (item.status === that.data.tabs[that.data.activeTab].value) {
                  return item
                }
              })
              that.setData({
                consumableList: []
              })
              that.setData({
                consumableList: newList
              })
            })
          }
        }
      })
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  //刷新
  onRefresh() {
    wx.showNavigationBarLoading();
    this.fetchList({
      pageNo: 1
    }, true)
  },
  onPullDownRefresh: function () {
    //调用刷新时将执行的方法
    this.onRefresh();
  },
  onReachBottom: function () {
    if (this.data.totalData > this.data.pageSize * this.data.currentPage) {
      this.fetchList({
        pageNo: this.data.currentPage + 1
      })
    }
  }
})