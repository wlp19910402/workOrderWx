// components/common/orderStatus/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon:{
      type:String,
      value:""
    },
    title:{
      type:String,
      value:""
    },
    text:{
      type:String,
      value:""
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentStatus : {}
  },

  methods:{
    matchStatus:(status)=>{
      const orderStatus= [{ label: "未派单", value: "wpd", color: "gray" },
      { label: "派单", value: "pd", color: "#eab71a" },
      { label: "接单", value: "jd", color: "#eab71a" },
      { label: "转单", value: "zd", color: "#eab71a" },
      { label: "结单", value: "wc", color: "#46b989"},
      { label: "已撤单", value: "cancel", color: "red"}]
      let match = orderStatus.find(item=>item.value===status)
      if(match){
       return match
      }
       return orderStatus
     },
  },
  ready(){
      this.setData({
        currentStatus:this.matchStatus(this.properties.orderStatus)
      })
  }
})
