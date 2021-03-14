const wxRequest = require('../../../../utils/request.js')
const API = require('../../../../utils/API.js')
const app = getApp()
Page({
  data: {
    id: null,
    userId: null,
    dataList: {},
    engineerList: [],
    isZdOrder: false,
    engineerId: null,
    engineerChecked: 0,
    supporterIds: [],
    items: [{
        value: 'USA',
        name: '美国'
      },
      {
        value: 'CHN',
        name: '中国',
        checked: 'true'
      },
      {
        value: 'BRA',
        name: '巴西'
      },
      {
        value: 'JPN',
        name: '日本'
      },
      {
        value: 'ENG',
        name: '英国'
      },
      {
        value: 'FRA',
        name: '法国'
      },
    ]
  },
  onLoad: function (options) {
    this.setData({
      id: options.id,
      userId: app.globalData.userId
    })
    wx.showLoading({
      title: '加载中...'
    })
    wxRequest(API.ENGINEER_LIST, {
      pageSize: 10000000,
      pageNo: 1
    }, 'GET', (response) => {
      let resData = response.data.data.records
      this.setData({
        engineerList: resData.map(item => {
          return {
            value: item.id,
            name: item.realname + "(" + item.mobile + ")"
          }
        })
      })
    })
  },
  radioChange(e) {
    this.setData({
      engineerId: e.detail.value
    })
  },
  checkboxChange(e) {
    this.setData({
      supporterIds: e.detail.value
    })
  },
  saveSubmit() {
    const that = this
    const params = {
      engineerId: this.data.engineerId,
      id: this.data.id,
      supporterIds: this.data.supporterIds
    }
    wx.showLoading({
      title: '正在提交',
    })
    wxRequest(API.ORDER_SEND, params, 'POST', (res) => {
      that.setData({
        isZdOrder: true
      })
    })
  },
  jumpPdList() {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
})