const wxRequest = require('../../../../utils/request.js')
const API = require('../../../../utils/API.js')
Page({
  onShareAppMessage() {
    return {
      title: 'tabs',
      path: 'page/weui/example/tabs/tabs'
    }
  },
  data: {
    inputShowed: false,
    inputVal: "",
    imgNull: "/static/img/images-null.png",
    triggerRefresher: false,
    scrollTops: [0, 0, 0, 0, 0, 0],
    tabs: [{
        title: '全部',
        value: "",
        consumableList: [],
        currentPage: 1,
        totalData: 0,
        whetherLast: false
      },
      {
        title: '未派单',
        value: "wpd",
        consumableList: [],
        currentPage: 1,
        totalData: 0,
        whetherLast: false
      },
      {
        title: '已派单',
        value: "pd",
        consumableList: [],
        currentPage: 1,
        totalData: 0,
        whetherLast: false
      },
      {
        title: '进行中',
        value: "jd",
        consumableList: [],
        currentPage: 1,
        totalData: 0,
        whetherLast: false
      },
      {
        title: '结单',
        value: "wc",
        consumableList: [],
        currentPage: 1,
        totalData: 0,
        whetherLast: false
      },
      {
        title: '已撤单',
        value: "cancel",
        consumableList: [],
        currentPage: 1,
        totalData: 0,
        whetherLast: false
      },
    ],
    pageSize: 10,
    activeTab: 0
  },
  onLoad() {
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
  fetchList: function (params, isRefresh = false, callback) {
    let that = this
    wxRequest(API.ORDER_MY_LIST, {
      pageSize: that.data.pageSize,
      pageNo: isRefresh ? 1 : that.data.currentPage,
      status: that.data.tabs[that.data.activeTab].value,
      ...params
    }, 'GET', (res) => {
      let whetherLastTmp = false;
      let tmpOldTab = that.data.tabs.find((item, index) => index === that.data.activeTab)
      if (res.data.data.total <= res.data.data.current * that.data.pageSize) {
        whetherLastTmp = true
      } else {
        whetherLastTmp = false
      }
      this.setData({
        tabs: that.data.tabs.map((item, index) => {
          if (index === that.data.activeTab) {
            return {
              ...tmpOldTab,
              whetherLast: whetherLastTmp,
              totalData: res.data.data.total,
              currentPage: res.data.data.current,
              consumableList: isRefresh ? res.data.data.records : [...tmpOldTab.consumableList, ...res.data.data.records]
            }
          } else {
            return item;
          }
        })
      })
      wx.hideLoading()
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
      if (callback) callback();
    })
  },
  onTabClick: function (e) {
    this._tempTiggerScroll = this.data.scrollTops.find((item, index) => index === this.data.activeTab)
    const idx = e.detail.index
    this.setData({
      activeTab: idx
    })
    if (this.data.tabs.find((item, index) => index === idx).consumableList.length === 0) {
      wx.showLoading({
        title: '加载中...'
      })
      this.fetchList({
        pageNo: 1
      })
    }
  },
  onChange(e) {
    this._tempTiggerScroll = this.data.scrollTops.find((item, index) => index === this.data.activeTab)
    const idx = e.detail.index
    this.setData({
      activeTab: idx
    })
    if (this.data.tabs.find((item, index) => index === idx).consumableList.length === 0) {
      wx.showLoading({
        title: '加载中...',
      })
      this.fetchList({
        pageNo: 1
      })
    }
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },
  //刷新
  onRefresh() {
    if (this._allFreshing) return
    this._allFreshing = true
    this._tempTiggerScroll = 0
    this.setData({
      triggerRefresher: false,
      scrollTops: this.data.scrollTops.map((item, index) => {
        if (index === this.data.activeTab) {
          return 0
        } else {
          return item
        }
      })
    })
    this.fetchList({
      pageNo: 1
    }, true, () => {
      this._allFreshing = false
    })
  },
  scrollBottom: function (e) {
    let matchCurrentPage = this.data.tabs.find((_, index) => index === this.data.activeTab)
    if (matchCurrentPage.totalData > this.data.pageSize * matchCurrentPage.currentPage) {
      this.fetchList({
        pageNo: matchCurrentPage.currentPage + 1
      }, false, () => {
        if (this._tempTiggerScroll === undefined) return
        this.setData({
          scrollTops: this.data.scrollTops.map((item, index) => {
            if (index === this.data.activeTab) {
              return this._tempTiggerScroll
            } else {
              return item
            }
          })
        })
      })
    }
  },
  tiggerScroll: function (e) {
    this._tempTiggerScroll = e.detail.scrollTop
  }
})