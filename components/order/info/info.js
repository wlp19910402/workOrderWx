// components/order/info/info.js

const wxRequest = require('../../../utils/request.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
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
    buttons: [
      {
          extClass: '',
          text: '关闭',
          
      }
  ],
  showDialog:false,
  dialogTitle:"",
  showWorkConsumables:false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showWorkConsumablesList:function(){
      this.setData({
        showDialog:true,
        dialogTitle:"更换耗材列表",
        showWorkConsumables:true
    })
    },
    buttontap(e) {
      this.setData({
        showDialog:false,
        showWorkConsumables:false
       })
    },
    showOrderLogs(){
      
    }
  },
  ready() {
    wx.showLoading({
      title: '加载中...',
  })
    wxRequest('wx-api/work-order/info/' + this.properties.infoId, null, 'GET', (res) => {
      this.setData({
        dataList: res.data.data
      })
      wx.hideLoading()
    })
  }
})