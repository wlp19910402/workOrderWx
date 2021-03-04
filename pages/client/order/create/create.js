const wxRequest = require('../../../../utils/request.js');
const API = require('../../../../utils/API.js')
Page({
    /**
     * 页面的初始数据
     */
    data: {
        formData: {},
        imgUrls: [],
        createId:null,
        isCreateOrder: true,
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
        const that = this;
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
                            API.ORDER_CREATE, {
                                ...this.data.formData,
                                orderType: "wx",
                                imgUrls: this.data.imgUrls.filter(item => item !== false)
                            },
                            'POST',
                            (response) => {
                                wx.hideLoading()
                                that.setData({
                                    isCreateOrder: false,
                                    createId:response.data.data
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
        this.setData({
            [`formData.company`]: options.company,
            [`formData.portfolioId`]: options.id,
        })
    },
    setUploadImageUrls: function (urls) {
        this.setData({
            imgUrls: urls.detail
        })
    }
})