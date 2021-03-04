const app = getApp()
const wxRequest = require('../../utils/request.js')
const API = require('../../utils/API.js')
Page({
    /**
     * 页面的初始数据
     */
    data: {
        userInfo: null,
        hasUserInfo: false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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
   async getUserInfo(e) {
        if(e.detail.userInfo){
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
                    wxRequest(API.USER_LOGIN,dataParams,"POST",(res)=>{
                      let resData = res.data
                      if(resData.code===0){
                        wx.setStorageSync('token', resData.data.token)
                        wx.setStorageSync('isAdmin', resData.data.isAdmin)
                        wx.reLaunch({
                            url: '/pages/index/index',
                        })
                        app.globalData.isAdmin=resData.data.isAdmin
                      }
                    })
                  } else {
                    console.log('登录失败！' + resLogin.errMsg)
                  }
                }
              })

        }
    },
    onShow: function () {
        wx.hideHomeButton()
    }
})