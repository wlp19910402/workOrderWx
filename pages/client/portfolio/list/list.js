
const wxRequest = require('../../../../utils/request.js')
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    imgNull: "/static/img/images-null.png",
    activeTab: 0,
    consumableList: [],
  },
  scanCodeDevice(){
    wx.scanCode({
      complete: (res) => {
        console.log(res)
          wx.navigateTo({
            url: '/pages/client/portfolio/scan/scan?msg='+res.result,
          })
      },
    })
},
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
    // wxRequest('wx-api/list',{pageNo:1,pageSize:1},'GET',(res)=>{
    //   console.log(res)
    //   console.log("------")
    // })
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
    let tmp = [{"id":16,"no":"dev000016","type":"dev_type_002","typeName":"手机","name":"放大镜\uD83D\uDD0E1","brand":"dev_brand_03","brandName":"华为","model":"dev_module_04","modelName":"台式","description":"放大镜\n","createUser":1,"createUsername":"admin","createTime":"2021-01-28 16:59:52","updateTime":"2021-01-28 17:00:02","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210128/04871e181ae041e9a33cae6469b2d7d3.jpg"]},{"id":15,"no":"dev000015","type":"dev_type_002","typeName":"手机","name":"移动设备1","brand":"dev_brand_04","brandName":"苹果","model":"dev_module_05","modelName":"壁挂式","description":"222","createUser":1,"createUsername":"admin","createTime":"2021-01-21 01:22:31","updateTime":"2021-01-23 07:00:41","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/881d7843090a4628a47b247ce4d7a6c8.jpg"]},{"id":14,"no":"dev000014","type":"dev_type_002","typeName":"手机","name":"耗材类型1","brand":"dev_brand_03","brandName":"华为","model":"dev_module_04","modelName":"台式","description":"2222","createUser":1,"createUsername":"admin","createTime":"2021-01-17 23:20:06","updateTime":"2021-01-23 07:00:47","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/b0c34c2e9e3a478490c9767fcba4ace1.jpg"]},{"id":10,"no":"dev1060d","type":"dev_type004","typeName":"手表","name":"手表⌚️哦1","brand":"dev_brand_004","brandName":"劳力士","model":"lao-1","modelName":"","description":"1222","createUser":1,"createUsername":"admin","createTime":"2021-01-15 23:50:04","updateTime":"2021-01-28 10:53:11","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/8be7ec245b824772a35fbe029b30fa19.jpg","http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210128/fb22edf89ba144ea99406b73502d8113.jpg","http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210128/fadaf2c593fd406a8ff8ccf25bdc51fd.jpg"]},{"id":9,"no":"dev960d","type":"dev_type_002","typeName":"手机","name":"设备BB","brand":"dev_brand_04","brandName":"苹果","model":"dev_module_05","modelName":"壁挂式","description":"1大2","createUser":1,"createUsername":"admin","createTime":"2021-01-15 23:49:59","updateTime":"2021-01-20 20:10:51","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/cc1a70d8a36b4b96a161860f5d9cbff9.jpg"]},{"id":8,"no":"HUAWEI P403","type":"dev_type_001","typeName":"饮水机","name":"华为P403","brand":"dev_brand_01","brandName":"美的","model":"dev_module_02","modelName":"PPF棉","description":"多大","createUser":1,"createUsername":"admin","createTime":"2021-01-14 23:42:26","updateTime":"2021-01-20 20:12:09","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/36b382aac1884737b3a84898888a2da1.jpg","http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/508fb4a3a7714acabdaa863fb1dd6862.jpg"]},{"id":6,"no":"HUAWEI P40","type":"dev_type_002","typeName":"手机","name":"华为P40","brand":"dev_brand_03","brandName":"华为","model":"dev_module_04","modelName":"台式","description":"订单","createUser":1,"createUsername":"admin","createTime":"2021-01-14 01:49:14","updateTime":"2021-01-23 06:59:46","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/112988a4adb24bae956f8c9bdda4580e.jpg"]},{"id":5,"no":"111001","type":"dev_type004","typeName":"手表","name":"手表MENU 9i","brand":"dev_brand_004","brandName":"劳力士","model":"lao-1","modelName":"","description":"手表手表","createUser":1,"createUsername":"admin","createTime":"2021-01-13 07:28:09","updateTime":"2021-01-23 06:59:54","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/701ddc18a30b4e7ca8ad831161470c1a.jpg"]},{"id":4,"no":"111002","type":"dev_type_002","typeName":"手机","name":"华为荣耀40","brand":"dev_brand_03","brandName":"华为","model":"dev_module_04","modelName":"台式","description":"华为手机你见过台式的吗","createUser":1,"createUsername":"admin","createTime":"2021-01-13 06:33:20","updateTime":"2021-01-23 07:00:01","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/2472aa5374f942b59a4eb149594da9f6.jpg"]},{"id":2,"no":"111003","type":"dev_type_002","typeName":"手机","name":"Mac pro 2021","brand":"dev_brand_03","brandName":"华为","model":"dev_module_04","modelName":"台式","description":"1","createUser":1,"createUsername":"admin","createTime":"2021-01-12 08:34:39","updateTime":"2021-01-23 07:00:09","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/948f4c7b3c3f49699932cc9605bbaee6.jpg"]}]
    this.setData({
      consumableList: tmp,
    })
  }
})

let list = {"code":0,"data":{"records":[{"id":16,"no":"dev000016","type":"dev_type_002","typeName":"手机","name":"放大镜\uD83D\uDD0E1","brand":"dev_brand_03","brandName":"华为","model":"dev_module_04","modelName":"台式","description":"放大镜\n","createUser":1,"createUsername":"admin","createTime":"2021-01-28 16:59:52","updateTime":"2021-01-28 17:00:02","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210128/04871e181ae041e9a33cae6469b2d7d3.jpg"]},{"id":15,"no":"dev000015","type":"dev_type_002","typeName":"手机","name":"移动设备1","brand":"dev_brand_04","brandName":"苹果","model":"dev_module_05","modelName":"壁挂式","description":"222","createUser":1,"createUsername":"admin","createTime":"2021-01-21 01:22:31","updateTime":"2021-01-23 07:00:41","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/881d7843090a4628a47b247ce4d7a6c8.jpg"]},{"id":14,"no":"dev000014","type":"dev_type_002","typeName":"手机","name":"耗材类型1","brand":"dev_brand_03","brandName":"华为","model":"dev_module_04","modelName":"台式","description":"2222","createUser":1,"createUsername":"admin","createTime":"2021-01-17 23:20:06","updateTime":"2021-01-23 07:00:47","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/b0c34c2e9e3a478490c9767fcba4ace1.jpg"]},{"id":10,"no":"dev1060d","type":"dev_type004","typeName":"手表","name":"手表⌚️哦1","brand":"dev_brand_004","brandName":"劳力士","model":"lao-1","modelName":"","description":"1222","createUser":1,"createUsername":"admin","createTime":"2021-01-15 23:50:04","updateTime":"2021-01-28 10:53:11","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/8be7ec245b824772a35fbe029b30fa19.jpg","http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210128/fb22edf89ba144ea99406b73502d8113.jpg","http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210128/fadaf2c593fd406a8ff8ccf25bdc51fd.jpg"]},{"id":9,"no":"dev960d","type":"dev_type_002","typeName":"手机","name":"设备BB","brand":"dev_brand_04","brandName":"苹果","model":"dev_module_05","modelName":"壁挂式","description":"1大2","createUser":1,"createUsername":"admin","createTime":"2021-01-15 23:49:59","updateTime":"2021-01-20 20:10:51","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/cc1a70d8a36b4b96a161860f5d9cbff9.jpg"]},{"id":8,"no":"HUAWEI P403","type":"dev_type_001","typeName":"饮水机","name":"华为P403","brand":"dev_brand_01","brandName":"美的","model":"dev_module_02","modelName":"PPF棉","description":"多大","createUser":1,"createUsername":"admin","createTime":"2021-01-14 23:42:26","updateTime":"2021-01-20 20:12:09","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/36b382aac1884737b3a84898888a2da1.jpg","http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/508fb4a3a7714acabdaa863fb1dd6862.jpg"]},{"id":6,"no":"HUAWEI P40","type":"dev_type_002","typeName":"手机","name":"华为P40","brand":"dev_brand_03","brandName":"华为","model":"dev_module_04","modelName":"台式","description":"订单","createUser":1,"createUsername":"admin","createTime":"2021-01-14 01:49:14","updateTime":"2021-01-23 06:59:46","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/112988a4adb24bae956f8c9bdda4580e.jpg"]},{"id":5,"no":"111001","type":"dev_type004","typeName":"手表","name":"手表MENU 9i","brand":"dev_brand_004","brandName":"劳力士","model":"lao-1","modelName":"","description":"手表手表","createUser":1,"createUsername":"admin","createTime":"2021-01-13 07:28:09","updateTime":"2021-01-23 06:59:54","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/701ddc18a30b4e7ca8ad831161470c1a.jpg"]},{"id":4,"no":"111002","type":"dev_type_002","typeName":"手机","name":"华为荣耀40","brand":"dev_brand_03","brandName":"华为","model":"dev_module_04","modelName":"台式","description":"华为手机你见过台式的吗","createUser":1,"createUsername":"admin","createTime":"2021-01-13 06:33:20","updateTime":"2021-01-23 07:00:01","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/2472aa5374f942b59a4eb149594da9f6.jpg"]},{"id":2,"no":"111003","type":"dev_type_002","typeName":"手机","name":"Mac pro 2021","brand":"dev_brand_03","brandName":"华为","model":"dev_module_04","modelName":"台式","description":"1","createUser":1,"createUsername":"admin","createTime":"2021-01-12 08:34:39","updateTime":"2021-01-23 07:00:09","updateUser":1,"updateUsername":"admin","imgUrls":["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/948f4c7b3c3f49699932cc9605bbaee6.jpg"]}],"total":10,"size":10,"current":1,"searchCount":true,"pages":1},"message":"success"}