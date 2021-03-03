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
    /**TODO  qrcode是测试数据，最终使用 options.qrCode */
    // console.log(options.qrCode)
    // const qrcode="codeEDANG^843QNG"
    wxRequest(API.PORTFOLIO_INFO_BY_QRCODE,{qrCodde:options.qrCode},'GET',(res)=>{
      console.log(res.data.data)
      this.setData({
        portfolioInfo:res.data.data
      })
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