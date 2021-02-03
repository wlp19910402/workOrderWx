const app = getApp()
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
        radioItems: [{
                name: '客户人员',
                value: '0',
                checked: true
            },
            {
                name: '维修人员',
                value: '1'
            }
        ],
        isAgree: false,
        formData: {
            radio: '1'
        },
        rules: [
            {
                name: 'username',
                rules: [{
                    required: true,
                    message: '用户名是必填的！'
                }],
            },
            {
                name: 'realname',
                rules: [{
                    required: true,
                    message: '真实姓名是必填的！'
                }],
            },
            {
                name:"password",
                rules:[{
                    required: true,
                    message: '密码是必填的！'
                },{
                    minlength: 6,
                    message: '密码长度不能低于6位！'
                }]
            },{
                name:"rePassword",
                rules:[{
                    required: true,
                    message: '重新密码是必填的！'
                },{
                    minlength: 6,
                    message: '重新密码长度不能低于6位！'
                }]
            },
            {
                name: 'mobile',
                rules: [{
                    required: true,
                    message: '手机号必填'
                }, {
                    mobile: true,
                    message: '手机号格式不对'
                }],
            },
            {
                name: 'email',
                rules: [{
                    required: true,
                    message: '邮箱必填'
                }, {
                    email: true,
                    message: '邮箱格式不对'
                }],
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
        this.selectComponent('#form').validate((valid, errors) => {
            wx.getSetting({
                success: res => {
                    if (!res.authSetting['scope.userInfo']) return
                    if (!valid) {
                        const firstError = Object.keys(errors)
                        if (firstError.length) {
                            this.setData({
                                error: errors[firstError[0]].message
                            })
                        }
                    } else {
                        wx.showToast({
                            title: '校验通过'
                        })
                        console.log(app.globalData.userInfo)
                    }
                }
            })
        })
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
                    console.log(res)
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo(e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})