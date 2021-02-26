// components/common/orderStatus/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderType: {
      type: String,
      value: "wx"
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentType: {}
  },

  methods: {
    matchType: (type) => {
      console.log(type)
      const orderType = [{
          label: "安装",
          value: "az",
          color: "eab71a"
        },
        {
          label: "维修",
          value: "wx",
          color: "#eab71a"
        },
        {
          label: "巡检",
          value: "xj",
          color: "#1890ff"
        },
        {
          label: "建档",
          value: "jd",
          color: "#46b989"
        }
      ]
      let match = orderType.find(item => item.value === type)
      if (match) {
        return match
      }
      return orderType
    },
  },
  ready() {
    console.log("@22222222",this.properties.orderType)
    this.setData({
      currentType: this.matchType(this.properties.orderType)
    })
  }
})