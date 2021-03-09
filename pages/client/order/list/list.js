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
    whetherLast: false,
    inputVal: "",
    imgNull: "/static/img/images-null.png",
    tabs: [{
        title: '全部',
        value: ""
      },
      {
        title: '未派单',
        value: "wpd"
      },
      {
        title: '已派单',
        value: "pd"
      },
      {
        title: '进行中',
        value: "jd"
      },
      {
        title: '结单',
        value: "wc"
      },
      {
        title: '已撤单',
        value: "cancel"
      },
    ],
    activeTab: 0,
    consumableList: [],
    currentPage: 1,
    totalData: 0,
    pageSize: 10
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
  fetchList: function (params, isRefresh = false) {
    let that = this
    if (isRefresh) {
      this.setData({
        consumableList: [],
        whetherLast: false
      })
    }
    wxRequest(API.ORDER_MY_LIST, {
      pageSize: that.data.pageSize,
      pageNo: that.data.currentPage,
      status: that.data.tabs[that.data.activeTab].value,
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
        consumableList: [...that.data.consumableList, ...res.data.data.records],
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
    //在当前页面显示导航条加载动画
    wx.showNavigationBarLoading();
    //显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
    this.fetchList({
      pageNo: 1
    }, true)
    // this.getData();
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