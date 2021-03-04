const wxRequest = require('../../../../utils/request.js')
const API = require("../../../../utils/API.js")
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    imgNull: "/static/img/images-null.png",
    activeTab: 0,
    consumableList: [],
    isShowNull: false
  },
  isLate: (date) => {
    return new Date(data)
  },
  onLoad(options) {
    wx.showLoading({
      title: '加载中...',
    })
    wxRequest(API.PORTFOLIO_CONSUMABLE_LIST + '/' + options.id, null, "GET", (res) => {
      this.setData({
        consumableList: res.data.data,
        isShowNull: true
      })
    }, (err) => {
      this.setData({
        consumableList: [],
        isShowNull: true
      })
    })
  }
})