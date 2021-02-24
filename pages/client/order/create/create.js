const wxRequest = require('../../../../utils/request.js')
Page({
    /**
     * 页面的初始数据
     */
    data: {
        files: [],
        formData: {},
        imgUrls:[],
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
                            'wx-api/work-order/weixin-add', {
                                ...this.data.formData,
                                orderType: "wx",
                                imgUrls:this.data.imgUrls
                            },
                            'POST',
                            (response) => {
                                wx.hideLoading()
                                wx.reLaunch({
                                    url: '/pages/common/resultPageSuccess/resultPageSuccess',
                                })
                            }
                        )
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
    previewImage: function (e) {
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        })
    },
    selectFile(files) {
        // console.log('files', files)
        // 返回false可以阻止某次文件上传
    },
    uplaodFile(files) {
        console.log('upload files', files)
        return new Promise((resolve, reject) => {
            let imgUrls = [];
            let index = 0;
            const qmUploadImg = (idx) => {
                let filesName = files.tempFilePaths[idx].split('/')[files.tempFilePaths[idx].split('/').length - 1]
                wxRequest(
                    'wx-api/oss/upload-sign', {
                        "fileMd5": "",
                        "originalName": filesName,
                        "share": true,
                        "target": ""
                    },
                    "POST",
                    (ossRes) => {
                        let ossData = ossRes.data.data
                        console.log(ossRes)
                        wx.uploadFile({
                            filePath: files.tempFilePaths[index],
                            name: "file",
                            url: ossData.signInfo.host,
                            formData: {
                                name: ossData.fileName,
                                key: ossData.resourceKey,
                                policy: ossData.signInfo.policy,
                                OSSAccessKeyId: ossData.signInfo.accessid,
                                signature: ossData.signInfo.signature,
                                callback: ossData.signInfo.callback
                            },
                            complete: (completeRes) => {
                                if (completeRes.statusCode === 200 && JSON.parse(completeRes.data).code === 0) {
                                    imgUrls.push(JSON.parse(completeRes.data).data.url)
                                } else {
                                    imgUrls.push(flase)
                                }
                                if (files.tempFilePaths.length === index + 1) {
                                    resolve({
                                        urls: imgUrls
                                    })
                                    this.setData({
                                        imgUrls:imgUrls
                                    })
                                } else {
                                    index++;
                                    qmUploadImg(index)
                                }
                            }
                        })
                    }
                )
            }
            qmUploadImg(index)
        })
    },
    uploadError(e) {
        console.log('upload error', e.detail)
    },
    uploadSuccess(e) {
        console.log('upload success', e.detail)
    }
})