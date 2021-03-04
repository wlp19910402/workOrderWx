Component({
  /**
   * 组件的属性列表
   */
  properties: {
    portfolio: {
      type: Object,
      value: {}
    }
  },
  data: {
    expirationTime: ""
  },
  methods: {
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
  },
  observers: {
    'portfolio': function (portfolio) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        expirationTime: this.formatDate(portfolio.expirationTime)
      })
    }
  }
})