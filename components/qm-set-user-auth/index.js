// components/qm-set-user-auth/index.js
const app = getApp()
const wxRequest = require('../../utils/request.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo:{},
    hideDialog:true
  },
  ready() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    async getUserInfo(e) {
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
              let dataParams = {
                "jsCode": resLogin.code,
                "wxUser": {
                  "avatarUrl": e.detail.userInfo.avatarUrl,
                  "nickName": e.detail.userInfo.nickName
                }
              }
              //发起网络请求
              wxRequest('wx-api/wx-login', dataParams, "POST", (res) => {
                let resData = res.data
                  wx.setStorageSync('token', resData.data.token)
                  wx.setStorageSync('isAdmin', resData.data.isAdmin)
              })
            } else {
              console.log('登录失败！' + resLogin.errMsg)
            }
          }
        })
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }
    },
    setSubscribeMessage: function () {
      const that = this;
      wx.requestSubscribeMessage({
        tmplIds: ["Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4"],
        complete: function (rdes) {
          console.log("订阅信息", rdes)
          that.setData({
            hideDialog:true
          })
        }
      })
    },
  }
})