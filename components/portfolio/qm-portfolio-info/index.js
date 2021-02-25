Component({
  /**
   * 组件的属性列表
   */
  properties: {
    portfolio: {
      type: Object,
      value: {}
    },
    consumables:{
      type:Array,
      value:[]
    },
    parts:{
      type:Array,
      value:[]
    }
  },
  data:{
    showDialog:false,
    buttons: [
      {
          extClass: '',
          text: '关闭',
          
      }
  ],
  dialogTitle:"",
  showConsumable:false,
  showPart:false
  },
  methods:{
    showPartList:function(){
     this.setData({
      showDialog:true,
      dialogTitle:"备件列表",
      showConsumable:false,
      showPart:true
     })
    },
    showConsumablesList:function(){
      this.setData({
        showDialog:true,
        dialogTitle:"耗材列表",
        showConsumable:true,
        showPart:false
       })
    },
    buttontap(e) {
      this.setData({
        showDialog:false,
        showConsumable:false,
        showPart:false
       })
    }
  }
})