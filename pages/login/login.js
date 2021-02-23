const app = getApp()
const wxRequest = require('../../utils/request.js')
Page({
    /**
     * 页面的初始数据
     */
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        showTopTips: false,
        isAgree: false,
        formData: {},
        rules: [{
                name: 'username',
                rules: [{
                    required: true,
                    message: '用户名是必填的！'
                }],
            },
            {
                name: "password",
                rules: [{
                    required: true,
                    message: '密码是必填的！'
                }, {
                    minlength: 6,
                    message: '密码长度不能低于6位！'
                }]
            }
        ]
    },
    formInputChange(e) {
        const {
            field
        } = e.currentTarget.dataset
        this.setData({
            [`formData.${field}`]: e.detail.value
        })
    },
    bindAgreeChange: function (e) {
        this.setData({
            isAgree: !!e.detail.value.length
        });
    },
    submitForm() {
        // this.selectComponent('#form').validate((valid, errors) => {
            wx.getSetting({
                success: res => {
                    if (!res.authSetting['scope.userInfo']) return
                    // if (!valid) {
                    //     const firstError = Object.keys(errors)
                    //     if (firstError.length) {
                    //         this.setData({
                    //             error: errors[firstError[0]].message
                    //         })
                    //     }
                    // } else {
                    //     if (!this.data.isAgree) {
                    //         this.setData({
                    //             error: "请勾选协议条款"
                    //         })
                    //         return
                    //     }
                    //     wx.showToast({
                    //         title: '校验通过'
                    //     })
                    //     console.log(app.globalData.userInfo)
                    // }
                }
            })
        // })
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
                    let dataParams = {
                      "jsCode": resLogin.code,
                      "wxUser": {
                        "avatarUrl": e.detail.userInfo.avatarUrl,
                        "nickName": e.detail.userInfo.nickName
                      }
                    }
                    //发起网络请求
                    wxRequest('wx-api/wx-login',dataParams,"POST",(res)=>{
                      let resData = res.data
                      if(resData.code===0){
                        wx.setStorageSync('token', resData.data.token)
                        wx.setStorageSync('isAdmin', resData.data.isAdmin)
                      }
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
    onShow: function () {
        wx.hideHomeButton()
    }
})