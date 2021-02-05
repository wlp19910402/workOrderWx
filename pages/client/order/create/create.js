const app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        files: [],
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
        rules: [{
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
                name: "password",
                rules: [{
                    required: true,
                    message: '密码是必填的！'
                }, {
                    minlength: 6,
                    message: '密码长度不能低于6位！'
                }]
            }, {
                name: "rePassword",
                rules: [{
                    required: true,
                    message: '重新密码是必填的！'
                }, {
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

                        if (!this.data.isAgree) {
                            this.setData({
                                error: "请勾选协议条款"
                            })
                            return
                        }
                        const {
                            password,
                            rePassword
                        } = this.data.formData
                        if (password !== rePassword) {
                            this.setData({
                                error: "两次密码输入不同"
                            })
                            return
                        }
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
        this.setData({
            selectFile: this.selectFile.bind(this),
            uplaodFile: this.uplaodFile.bind(this)
        })
    },
    chooseImage: function (e) {
        var that = this;
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.setData({
                    files: that.data.files.concat(res.tempFilePaths)
                });
            }
        })
    },
    previewImage: function(e){
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        })
    },
    selectFile(files) {
        console.log('files', files)
        // 返回false可以阻止某次文件上传
    },
    uplaodFile(files) {
        console.log('upload files', files)
        // 文件上传的函数，返回一个promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('some error')
            }, 1000)
        })
    },
    uploadError(e) {
        console.log('upload error', e.detail)
    },
    uploadSuccess(e) {
        console.log('upload success', e.detail)
    }
})