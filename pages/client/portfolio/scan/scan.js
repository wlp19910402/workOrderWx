// pages/client/portfolio/scan/scan.js
const wxRequest = require('../../../../utils/request.js')
const API = require('../../../../utils/API.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    portfolioInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchPortfolioData(options.qrCode)
  },
  fetchPortfolioData(qrCode){
    wxRequest(API.PORTFOLIO_INFO_BY_QRCODE,{qrCodde:qrCode},'GET',(res)=>{
      this.setData({
        portfolioInfo:res.data.data
      })
    })
  },
  reScanCode(){
    wx.scanCode({
      complete: (res) => {
        if (res.result) {
          this.fetchPortfolioData(res.result)
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})