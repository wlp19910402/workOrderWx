const wxRequest = require('../../../utils/request.js')
const API = require('../../../utils/API.js')
const app = getApp()
const subscriptionsSetting = require('../../../utils/subscriptionsSetting.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    infoType: {
      type: String,
      value: "client"
    },
    // list:Object
    infoId: {
      type: Number,
      value: 2
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    dataList: {},
    buttons: [{
      extClass: '',
      text: '关闭',

    }],
    userId: null,
    showDialog: false,
    dialogTitle: "",
    showWorkConsumables: false,
    showOrderLog: false,
    logData: []
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showWorkConsumablesList: function () {
      this.setData({
        showDialog: true,
        dialogTitle: "更换耗材列表",
        showWorkConsumables: true,
        showOrderLog: false
      })
    },
    buttontap(e) {
      this.setData({
        showDialog: false,
        showWorkConsumables: false,
        showOrderLog: false
      })
    },
    showOrderLogs() {
      this.setData({
        showDialog: true,
        dialogTitle: "工单日志",
        showWorkConsumables: false,
        showOrderLog: true
      })
    },
    jdOrder(e) {
      const that = this
      subscriptionsSetting(() => {
        wx.showModal({
          title: "提示",
          content: "请确认是否接单？",
          confirmColor: "#46b989",
          confirmText: "确认",
          success: (res) => {
            if (res.confirm) {
              wx.showLoading({
                title: '接单中...',
              })
              wxRequest(API.ORDER_MAINTAIN_JD + '/' + that.data.dataList.id, null, 'POST', (res) => {
                wx.showLoading({
                  title: '接单中...',
                })
                that.setData({
                  dataList: {},
                  logData: []
                })
                that.initData(() => {
                  wx.showToast({
                    title: '接单成功',
                    icon: 'success',
                    duration: 3000,
                  })
                })
              })
            }
          }
        })
      })
    },
    initData(next) {
      wxRequest(API.ORDER_INFO + '/' + this.properties.infoId, null, 'GET', (res) => {
        this.setData({
          dataList: res.data.data
        })
        wxRequest(API.ORDER_LOGS + '/' + this.properties.infoId, null, 'GET', (response) => {
          this.setData({
            logData: response.data.data
          })
          if (next) next()
        })
      })
    }
  },
  ready() {
    wx.showLoading({
      title: '加载中...',
    })
    this.setData({
      userId: app.globalData.userId
    })
    this.initData()
  }
})