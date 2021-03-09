// components/qm-set-user-auth/index.js
const app = getApp()
const wxRequest = require('../../utils/request.js')
const API = require('../../utils/API.js')
Component({
  /**
   * 组件的初始数据
   */
  data: {
    userInfo: null,
    toLinkIndex: false
  },
  ready() {
    if (wx.getStorageSync('userInfo')) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo'),
        hasUserInfo: true
      })
    } else {
      this.setData({
        userInfo: null,
        hasUserInfo: false
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    async getUserInfo(e) {
      const that = this
      if (e.detail.userInfo) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })
        wx.login({
          success: resLogin => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            if (resLogin.code) {
              wx.setStorageSync('userInfo', e.detail.userInfo)
              let dataParams = {
                "jsCode": resLogin.code,
                "wxUser": {
                  "avatarUrl": e.detail.userInfo.avatarUrl,
                  "nickName": e.detail.userInfo.nickName
                }
              }
              //发起网络请求
              wxRequest(API.USER_LOGIN, dataParams, "POST", (res) => {
                let resData = res.data
                wx.setStorageSync('token', resData.data.token)
                wx.setStorageSync('isAdmin', resData.data.isAdmin)
                app.globalData.isAdmin = resData.data.isAdmin
                app.globalData.userId=resData.data.id
                wxRequest(API.ORDER_COUNT, null, 'GET', (res) => {
                  app.globalData.orderCount = res.data.data
                })
              })
            } else {
              console.log('登录失败！' + resLogin.errMsg)
            }
          }
        })
      }
    },
    setSubscribeMessage: function () {
      if (!app.globalData.setSubscriptSetting) {
        wx.requestSubscribeMessage({
          tmplIds: ["Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4"],
          complete: function (rdes) {
            app.globalData.setSubscriptSetting = true
          }
        })
      }
    },
  }
})