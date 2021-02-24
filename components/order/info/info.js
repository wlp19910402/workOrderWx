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
    dataList: {}
  },
  /**
   * 组件的方法列表
   */
  methods: {
   
  },
  ready() {
    wxRequest('wx-api/work-order/info/' + this.properties.infoId, null, 'GET', (res) => {
      this.setData({
        dataList: res.data.data
      })
    })
  }
})