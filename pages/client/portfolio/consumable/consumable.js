
const wxRequest = require('../../../../utils/request.js')
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
    wxRequest('wx-api/portfolio/consumable-list/'+options.id,null,"GET",(res)=>{
      console.log(res.data.data)
      this.setData({
        consumableList:res.data.data
      })
    })
  }
})
