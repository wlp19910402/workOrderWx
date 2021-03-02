// components/common/orderStatus/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderStatus: {
      type: String,
      value: "wpd"
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentStatus: {}
  },

  methods: {
    matchStatus: (status) => {
      const orderStatus = [{
          label: "未派单",
          value: "wpd",
          color: "#eab71a"
        },
        {
          label: "待接单",
          value: "pd",
          color: "#1890ff"
        },
        {
          label: "进行中",
          value: "jd",
          color: "#1890ff"
        },
        {
          label: "转单",
          value: "zd",
          color: "#1890ff"
        },
        {
          label: "结单",
          value: "wc",
          color: "#46b989"
        },
        {
          label: "已撤单",
          value: "cancel",
          color: "#999"
        }
      ]
      let match = orderStatus.find(item => item.value === status)
      if (match) {
        return match
      }
      return orderStatus
    },
  },
  ready() {
    this.setData({
      currentStatus: this.matchStatus(this.properties.orderStatus)
    })
  }
})