const wxRequest = require('../../../../utils/request.js')
const API = require('../../../../utils/API.js')
Page({
  data: {
    portfolioInfo: {},
    isNullPortfolio: false
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    this.fetchPortfolioData(options.qrCode)
  },
  fetchPortfolioData(qrCode) {
    wxRequest(API.PORTFOLIO_INFO_BY_QRCODE, {
      qrCodde: qrCode
    }, 'GET', (res) => {
      this.setData({
        portfolioInfo: res.data.data,
        isNullPortfolio: false
      })
    }, (err) => {
      this.setData({
        portfolioInfo: {},
        isNullPortfolio: true
      })
    })
  },
  reScanCode() {
    wx.showLoading({
      title: '加载中...',
    })
    wx.scanCode({
      complete: (res) => {
        if (res.result) {
          this.fetchPortfolioData(res.result)
        }
      }
    })
  }
})