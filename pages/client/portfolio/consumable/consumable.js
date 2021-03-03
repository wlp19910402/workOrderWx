
const wxRequest = require('../../../../utils/request.js')
const API =require("../../../../utils/API.js")
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    imgNull: "/static/img/images-null.png",
    activeTab: 0,
    consumableList: [],
  },
  isLate:(date)=>{
    return new Date(data)
  },
  onLoad(options) {
    wxRequest(API.PORTFOLIO_CONSUMABLE_LIST+'/'+options.id,null,"GET",(res)=>{
      console.log(res.data.data)
      this.setData({
        consumableList:res.data.data
      })
    })
  }
})
