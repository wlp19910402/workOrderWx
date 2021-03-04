// pages/my/my.js
const app = getApp()
const wxRequest = require('../../utils/request.js')
const API = require("../../utils/API.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isAdmin:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    moduleData: [
      [{
        name: "设置订阅通知",
        icon: "icon-comment",
        link: "/",
        isLogin: false,
        bindTapFunc:"setSubscribeMessage"
      }],
      [{
        name: "退出登录",
        icon: "icon-sign-out",
        link: "/",
        isLogin: true,
        bindTapFunc:"logout"
      }]
    ]
  },
  setSubscribeMessage:function(){
    wx.requestSubscribeMessage({
      tmplIds: ["Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4"],
      complete: function (rdes) {
        console.log("订阅信息", rdes)
      }
    })
  },
  logout: function () {
    wx.showModal({
      title: "提示",
      content: "退出登录，您确认退出登录！",
      confirmColor: "#46b989",
      confirmText: "确认退出",
      success: (res) => {
        if(res.confirm){
          wxRequest(API.USER_LOGOUT, null, "POST", (logoutRes) => {
            let resData = logoutRes.data
            if (resData.code === 0) {
              wx.clearStorage()
              this.setData({
                userInfo: {},
                isAdmin:false
              })
              app.globalData.userInfo = {}
              app.globalData.isAdmin=false
              setTimeout(() => {
                wx.reLaunch({
                  url: '/pages/index/index',
                })
              }, 200);
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        isAdmin:app.globalData.isAdmin
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          isAdmin:wx.getStorageSync('isAdmin')
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          app.globalData.isAdmin=res.isAdmin
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            isAdmin:res.isAdmin
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: wx.getStorageSync('isAdmin') ? 3 : 2
      })
    }
  }
})