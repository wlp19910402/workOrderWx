const wxRequest = require('../../../../utils/request.js')
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
        formData: {},
        rules: [{
                name: 'customerName',
                rules: [{
                    required: true,
                    message: '姓名是必填的！'
                }],
            },
            {
                name: "workDescription"
            },
            {
                name: 'customerMobile',
                rules: [{
                    required: true,
                    message: '手机号必填'
                }, {
                    mobile: true,
                    message: '手机号格式不对'
                }],
            },
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
                        wx.showLoading({
                            title: '正在提交',
                        })
                        wxRequest(
                            'wx-api/work-order/sys-add', {
                                ...this.data.formData,
                                orderType: "wx"
                            },
                            'POST',
                            (response) => {
                                wx.hideLoading()
                                console.log(response)
                                console.log("------------------------")
                            })
                    }
                }
            })
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.company)
        this.setData({
            [`formData.company`]: options.company,
            [`formData.portfolioId`]: options.id,
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
    previewImage: function (e) {
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