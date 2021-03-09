// app.js
const wxRequest = require('./utils/request.js')
const API = require('./utils/API.js')
App({
  onLaunch() {
    const that = this;
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取用户信息
    wx.getSetting({
      withSubscriptions: true,
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: response => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = response.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(response)
              }
              wx.login({
                success: resLogin => {
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  if (resLogin.code) {
                    wx.setStorageSync('userInfo', response.userInfo)
                    let dataParams = {
                      "jsCode": resLogin.code,
                      "wxUser": {
                        "avatarUrl": response.userInfo.avatarUrl,
                        "nickName": response.userInfo.nickName
                      }
                    }
                    //发起网络请求
                    wxRequest(API.USER_LOGIN, dataParams, "POST", (loginRes) => {
                      let resData = loginRes.data
                      wx.setStorageSync('token', resData.data.token)
                      wx.setStorageSync('isAdmin', resData.data.isAdmin)
                      that.globalData.isAdmin = resData.data.isAdmin
                      wxRequest(API.ORDER_COUNT, null, 'GET', (res) => {
                        that.globalData.orderCount = res.data.data
                      })
                    })
                  } else {
                    console.log('登录失败！' + resLogin.errMsg)
                  }
                }
              })
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    isAdmin: false,
    wxNickname: "",
    orderCount: {
      pdCount: 0,
      jdCount: 0,
      wcCount: 0,
      myCount: 0
    },
    setSubscriptSetting: false
  }
})