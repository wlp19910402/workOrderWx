const wxRequest = require('../../../../utils/request.js')
const API = require('../../../../utils/API.js')
Page({
  data: {
    id: null,
    dataList: {},
    open: false,
    subImgUrls: [],
    subRemark: "",
    isPdOrder:true,
    buttons: [{
        extClass: '',
        text: '关闭'
      },
      {
        extClass: '',
        text: '更换'
      }
    ],
    editConsumableData: null, //更换耗材的数据
    editExpirDate: '', //更换耗材的日期
    saveConsumableDatas: [], //更换过的耗材列表数据
    oldConsumableDatas: [], //原始的耗材列表数据
    showDialog: false,
    dialogTitle: "",
    showWorkConsumables: false
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    wx.showLoading({
      title: '加载中...'
    })
    wxRequest(API.ORDER_INFO+'/' + options.id, null, 'GET', (res) => {
      this.setData({
        dataList: res.data.data,
        oldConsumableDatas: res.data.data.consumables
      })
      if(res.data.data.status&&res.data.data.status==='wc'){
        this.setData({
          isPdOrder:false,
        })
      }else{
        this.setData({
          isPdOrder:true,
        })
      }
    })
  },
  showWorkConsumablesList() {
    this.setData({
      showDialog: true,
      dialogTitle: "更换耗材列表",
      showWorkConsumables: true
    })
  },
  formInputChange(e) {
    this.setData({
      subRemark: e.detail.value
    })
  },
  buttontap(e) {
    if (e.detail.index === 0) {
      this.closeDialog()
    } else {
      this.confirmDialog()
    }
  },
  closeDialog() {
    this.setData({
      showDialog: false,
      showWorkConsumables: false
    })
  },
  confirmDialog() {
    let tmpDataList = this.data.dataList
    let oldExpTime = tmpDataList.consumables.find(item=>item.id === this.data.editConsumableData.id).expirationTime
    if(this.formatDate(oldExpTime)===this.data.editExpirDate){
      wx.showToast({
        title: '新到期日期和原到期日期一样哦~',
        icon: 'error',
        duration: 2000
      })
      return
    }
    this.setData({
      saveConsumableDatas: [...this.data.saveConsumableDatas,
        {
          pcId: this.data.editConsumableData.id,
          expirationTime: this.data.editExpirDate
        }
      ],
      dataList: {
        ...tmpDataList,
        consumables: tmpDataList.consumables.map(item => {
          if (item.id === this.data.editConsumableData.id) {
            return {
              ...item,
              newExpirationTime: this.data.editExpirDate,
              isEdit: true
            }
          } else {
            return item
          }
        })
      },
      showDialog: false,
      showWorkConsumables: false,
    })
  },
  formatDate(data) {
    if (isNaN(data) && !isNaN(Date.parse(data))) {
      let date = new Date(data)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      return year + "-" + (month < 10 ? '0' : '') + month + "-" + (day < 10 ? '0' : '') + day
    } else {
      return ""
    }
  },
  editConsumable(e) {
    const id = e.currentTarget.dataset.id;
    const that = this
    const consumableData = that.data.dataList.consumables.find(item => item.id === id)
    this.setData({
      showDialog: true,
      editConsumableData: consumableData,
      editExpirDate: this.formatDate(consumableData.expirationTime)
    })
  },
  //回退到原始的耗材有效期--取消修改
  reOldExpirTime(e) {
    let tmpDataList = this.data.dataList
    const id = e.currentTarget.dataset.id;
    const that = this
    this.setData({
      saveConsumableDatas: this.data.saveConsumableDatas.filter(item => item.pcId !== id),
      dataList: {
        ...tmpDataList,
        consumables: tmpDataList.consumables.map(item => {
          if (item.id === id) {
            return {
              ...item,
              newExpirationTime:"",
              isEdit: false
            }
          } else {
            return item
          }
        })
      },
    })
  },

  bindDateChange(e) {
    this.setData({
      editExpirDate: e.detail.value
    })
  },
  setUploadImageUrls: function (urls) {
    this.setData({
      subImgUrls: urls.detail
    })
  },
  toggleViwSlidebar: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },
  saveSubmit() {
    const that = this
    const params = {
      consumables: this.data.saveConsumableDatas,
      orderId: this.data.id,
      subImgUrls: this.data.subImgUrls,
      subRemark: this.data.subRemark
    }
    wx.showLoading({
      title: '正在提交',
    })
    wxRequest(API.ORDER_MAINTAIN_SUBMIT, params, 'POST', (res) => {
      this.setData({
        dataList:{...this.data.dataList,status:'wc'}
      })
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 6000,
      })
      setTimeout(() => {
        wx.navigateTo({
          url: '/pages/maintain/order/info/info?id=' + that.data.id
        })
      }, 1000);
    })
  },
  onShow(){
    if(this.data.dataList.status&&this.data.dataList.status==='wc'){
      this.setData({
        isPdOrder:false,
      })
    }else{
      this.setData({
        isPdOrder:true,
      })
    }
  }
})