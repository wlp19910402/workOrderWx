
const wxRequest = require('../../../../utils/request.js')
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
    tabs: [],
    activeTab: 0,
    consumableList: [],
  },
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
    wxRequest('wx-api/work-order/my-list',{pageNo:1,pageSize:10},'GET',(res)=>{
      this.setData({
        consumableList: res.data.data.records,
      })
      console.log("------")
    })
    const tabs = [{
        title: '全部',
        value: "all"
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
        title: '结单',
        value: "wc"
      },
      {
        title: '已撤单',
        cancel: "cancel"
      },

    ]
    this.setData({
      tabs
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
  onTabClick(e) {
    const index = e.detail.index
    this.setData({
      activeTab: index
    })
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
  }
})