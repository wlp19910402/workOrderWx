// components/common/orderStatus/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    date: {
      type: String,
      value: ""
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    modeDate: ""
  },
  ready() {
    if (isNaN(this.properties.date) && !isNaN(Date.parse(this.properties.date))) {
      let date = new Date(this.properties.date)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      this.setData({
        modeDate: year + "-" + (month<10? '0':'')+ month + "-"+ (day<10? '0':'') + day,
      })
    }
  }
})