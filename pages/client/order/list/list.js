
const wxRequest = require('../../../../utils/request.js')
Page({
  onShareAppMessage() {
    return {
      title: 'tabs',
      path: 'page/weui/example/tabs/tabs'
    }
  },
  data: {
    inputShowed: false,
    inputVal: "",
    imgNull: "/static/img/images-null.png",
    tabs: [],
    activeTab: 0,
    consumableList: [],
  },
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
    // wxRequest('wx-api/list',{pageNo:1,pageSize:1},'GET',(res)=>{
    //   console.log(res)
    //   console.log("------")
    // })
    const tabs = [{
        title: '全部',
        value: "all"
      },
      {
        title: '派单',
        value: "pd"
      },
      {
        title: '结单',
        value: "wc"
      },
      {
        title: '回撤',
        cancel: "cancel"
      },

    ]
    this.setData({
      tabs
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
  onTabClick(e) {
    const index = e.detail.index
    this.setData({
      activeTab: index
    })
  },
  onChange(e) {
    const index = e.detail.index
    this.setData({
      activeTab: index
    })
  },
  handleClick(e) {
    wx.navigateTo({
      url: './webview',
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
    let tmp = [{
      "id": 32,
      "orderNo": "xj202102040001",
      "orderType": "xj",
      "status": "wpd",
      "sourceType": "system_admin",
      "customerName": "李四",
      "customerMobile": "13900000000",
      "company": "华为有限责任公司",
      "portfolioId": 9,
      "workDescription": "111",
      "engineerId": "",
      "engineerName": "",
      "supporterIds": "",
      "supporterNames": "",
      "receivingTime": "",
      "createUser": 1,
      "createUserName": "",
      "createTime": "2021-02-04 16:02:28",
      "deviceName": "华为P403",
      "deviceType": "dev_type_001",
      "orderImgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210204/a32b2bfc3ed242d78737948036450b34.jpg"]
    }, {
      "id": 27,
      "orderNo": "xj202142270002",
      "orderType": "xj",
      "status": "wc",
      "sourceType": "system_admin",
      "customerName": "李四22",
      "customerMobile": "13900000000",
      "company": "华为有限责任公司2",
      "portfolioId": 9,
      "workDescription": "",
      "engineerId": 1,
      "engineerName": "张三",
      "supporterIds": "2",
      "supporterNames": "李四",
      "receivingTime": "",
      "createUser": 1,
      "createUserName": "",
      "createTime": "2021-01-27 13:42:36",
      "deviceName": "华为P403",
      "deviceType": "dev_type_001",
      "orderImgUrls": []
    }, {
      "id": 26,
      "orderNo": "xj202142270001",
      "orderType": "xj",
      "status": "pd",
      "sourceType": "system_admin",
      "customerName": "李四",
      "customerMobile": "13900000000",
      "company": "凌云博际222",
      "portfolioId": "",
      "workDescription": "",
      "engineerId": 2,
      "engineerName": "李四",
      "supporterIds": "1",
      "supporterNames": "张三",
      "receivingTime": "",
      "createUser": 1,
      "createUserName": "",
      "createTime": "2021-01-27 13:42:01",
      "deviceName": "",
      "deviceType": "",
      "orderImgUrls": []
    }, {
      "id": 22,
      "orderNo": "xj202108250001",
      "orderType": "xj",
      "status": "pd",
      "sourceType": "system_admin",
      "customerName": "小六",
      "customerMobile": "13900000000",
      "company": "凌云博际2",
      "portfolioId": 7,
      "workDescription": "111",
      "engineerId": 1,
      "engineerName": "张三",
      "supporterIds": "",
      "supporterNames": "",
      "receivingTime": "",
      "createUser": 1,
      "createUserName": "",
      "createTime": "2021-01-25 15:08:44",
      "deviceName": "华为P403",
      "deviceType": "dev_type_001",
      "orderImgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210125/81ea6d1f3dff4f97a9c471176d43cd75.jpg"]
    }]
    this.setData({
      consumableList: tmp,
    })
  }
})

let list = {
  "code": 0,
  "data": {
    "records": [{
      "id": 32,
      "orderNo": "xj202102040001",
      "orderType": "xj",
      "status": "wpd",
      "sourceType": "system_admin",
      "customerName": "李四",
      "customerMobile": "13900000000",
      "company": "华为有限责任公司",
      "portfolioId": 9,
      "workDescription": "111",
      "engineerId": "",
      "engineerName": "",
      "supporterIds": "",
      "supporterNames": "",
      "receivingTime": "",
      "createUser": 1,
      "createUserName": "",
      "createTime": "2021-02-04 16:02:28",
      "deviceName": "华为P403",
      "deviceType": "dev_type_001",
      "orderImgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210204/a32b2bfc3ed242d78737948036450b34.jpg"]
    }, {
      "id": 27,
      "orderNo": "xj202142270002",
      "orderType": "xj",
      "status": "wc",
      "sourceType": "system_admin",
      "customerName": "李四22",
      "customerMobile": "13900000000",
      "company": "华为有限责任公司2",
      "portfolioId": 9,
      "workDescription": "",
      "engineerId": 1,
      "engineerName": "张三",
      "supporterIds": "2",
      "supporterNames": "李四",
      "receivingTime": "",
      "createUser": 1,
      "createUserName": "",
      "createTime": "2021-01-27 13:42:36",
      "deviceName": "华为P403",
      "deviceType": "dev_type_001",
      "orderImgUrls": []
    }, {
      "id": 26,
      "orderNo": "xj202142270001",
      "orderType": "xj",
      "status": "pd",
      "sourceType": "system_admin",
      "customerName": "李四",
      "customerMobile": "13900000000",
      "company": "凌云博际222",
      "portfolioId": "",
      "workDescription": "",
      "engineerId": 2,
      "engineerName": "李四",
      "supporterIds": "1",
      "supporterNames": "张三",
      "receivingTime": "",
      "createUser": 1,
      "createUserName": "",
      "createTime": "2021-01-27 13:42:01",
      "deviceName": "",
      "deviceType": "",
      "orderImgUrls": []
    }, {
      "id": 22,
      "orderNo": "xj202108250001",
      "orderType": "xj",
      "status": "pd",
      "sourceType": "system_admin",
      "customerName": "小六",
      "customerMobile": "13900000000",
      "company": "凌云博际2",
      "portfolioId": 7,
      "workDescription": "111",
      "engineerId": 1,
      "engineerName": "张三",
      "supporterIds": "",
      "supporterNames": "",
      "receivingTime": "",
      "createUser": 1,
      "createUserName": "",
      "createTime": "2021-01-25 15:08:44",
      "deviceName": "华为P403",
      "deviceType": "dev_type_001",
      "orderImgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210125/81ea6d1f3dff4f97a9c471176d43cd75.jpg"]
    }],
    "total": 4,
    "size": 10,
    "current": 1,
    "searchCount": true,
    "pages": 1
  },
  "message": "success"
}