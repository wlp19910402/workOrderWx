// components/common/orderStatus/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    date:{
      type:String,
      value:""
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isLate : false
  },

  methods:{
    fetchIsLate:(date)=>{
      let old = (new Date(date)).valueOf()
      let current = (new Date()).valueOf()
      return current-old>0
     },
  },
  ready(){
      this.setData({
        isLate:this.fetchIsLate(this.properties.date)
      })
  }
})
