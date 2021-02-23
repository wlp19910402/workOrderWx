// components/order/info/info.js

const wxRequest = require('../../../utils/request.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // list:Object
    infoId: {
      type: Number,
      value: 2
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    dataList: {
      "id": 27,
      "orderNo": "xj202142270002",
      "orderType": "xj",
      "status": "wc",
      "sourceType": "system_admin",
      "customerName": "李四22",
      "customerMobile": "13900000000",
      "company": "华为有限责任公司",
      "portfolioId": 9,
      "workDescription": "工单描述工单描述工单描述工单描述工单描述工单描述工述",
      "engineerId": 1,
      "engineerName": "张三",
      "supporterIds": "2",
      "supporterNames": "李四",
      "receivingTime": "",
      "createUser": 1,
      "createUserName": "",
      "createTime": "2021-01-27 13:42:36",
      "orderImgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/36b382aac1884737b3a84898888a2da1.jpg", "http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/508fb4a3a7714acabdaa863fb1dd6862.jpg"],
      "subTime": "2021-02-04 16:42:25",
      "subUser": 1,
      "subUsername": "admin",
      "subRemark": "1111",
      "portfolio": {
        "id": 9,
        "no": "da000009",
        "companyId": 1,
        "companyNo": "cm160d",
        "companyName": "华为有限责任公司",
        "contactUser": "华尚",
        "contactMobile": "13900000000",
        "deviceId": 8,
        "deviceNo": "HUAWEI P403",
        "deviceName": "华为P403",
        "installTime": "2021-01-28 10:00:00",
        "installLocation": "义庄",
        "warrantyPeriod": "2",
        "qrCodde": "codeEDANG^843QNG",
        "type": "dev_type_001",
        "brand": "dev_brand_01",
        "model": "dev_module_02",
        "typeName": "饮水机",
        "brandName": "美的",
        "modelName": "PPF棉",
        "createUser": 1,
        "createUsername": "admin",
        "createTime": "2021-01-20 20:19:51",
        "updateTime": "2021-01-20 20:33:25",
        "updateUser": 1,
        "updateUsername": "admin",
        "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/36b382aac1884737b3a84898888a2da1.jpg", "http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/508fb4a3a7714acabdaa863fb1dd6862.jpg"]
      },
      "subImgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210204/de71b3c99aa34a57b524cb20a72fb40c.jpg", "http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/36b382aac1884737b3a84898888a2da1.jpg", "http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/508fb4a3a7714acabdaa863fb1dd6862.jpg", "http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/36b382aac1884737b3a84898888a2da1.jpg", "http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/508fb4a3a7714acabdaa863fb1dd6862.jpg", "http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/36b382aac1884737b3a84898888a2da1.jpg", "http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/508fb4a3a7714acabdaa863fb1dd6862.jpg"],
      "consumables": [{
        "id": 46,
        "portfolioId": 9,
        "consumableId": 13,
        "replacementTime": "2021-02-04 16:42:25",
        "replacementCycle": "30",
        "expirationTime": "2021-03-26 00:00:00",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:28:49",
        "baseInfo": {
          "id": 13,
          "name": "耗材墨盒",
          "type": "hc_type_002",
          "typeName": "墨盒",
          "model": "hc_module_02",
          "modelName": "硒鼓墨盒",
          "no": "hc000012",
          "description": "22222",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-20 19:32:54",
          "updateTime": "2021-01-23 07:01:05",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/9084d5229db94b959e2e78feba34575f.jpg"]
        }
      }, {
        "id": 47,
        "portfolioId": 9,
        "consumableId": 13,
        "replacementTime": "2021-02-04 16:42:25",
        "replacementCycle": "23",
        "expirationTime": "2021-02-28 00:00:00",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:28:49",
        "baseInfo": {
          "id": 13,
          "name": "耗材墨盒",
          "type": "hc_type_002",
          "typeName": "墨盒",
          "model": "hc_module_02",
          "modelName": "硒鼓墨盒",
          "no": "hc000012",
          "description": "22222",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-20 19:32:54",
          "updateTime": "2021-01-23 07:01:05",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/9084d5229db94b959e2e78feba34575f.jpg"]
        }
      }, {
        "id": 48,
        "portfolioId": 9,
        "consumableId": 12,
        "replacementTime": "2021-01-28 14:49:21",
        "replacementCycle": "2",
        "expirationTime": "2021-02-20 00:00:00",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:28:49",
        "baseInfo": {
          "id": 12,
          "name": "打印纸",
          "type": "hc_type_003",
          "typeName": "纸张",
          "model": "hc_module_03",
          "modelName": "A4",
          "no": "hc1160d",
          "description": "111",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-16 07:24:14",
          "updateTime": "2021-01-23 07:01:13",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/b87557b57ba64ceb8cb6b3245c735a9e.jpg"]
        }
      }, {
        "id": 49,
        "portfolioId": 9,
        "consumableId": 12,
        "replacementTime": "2021-01-28 14:49:21",
        "replacementCycle": "2",
        "expirationTime": "2021-02-20 00:00:00",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:28:49",
        "baseInfo": {
          "id": 12,
          "name": "打印纸",
          "type": "hc_type_003",
          "typeName": "纸张",
          "model": "hc_module_03",
          "modelName": "A4",
          "no": "hc1160d",
          "description": "111",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-16 07:24:14",
          "updateTime": "2021-01-23 07:01:13",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/b87557b57ba64ceb8cb6b3245c735a9e.jpg"]
        }
      }, {
        "id": 50,
        "portfolioId": 9,
        "consumableId": 12,
        "replacementTime": "2021-01-07 10:00:00",
        "replacementCycle": "2",
        "expirationTime": "2021-01-05 10:00:00",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:28:49",
        "baseInfo": {
          "id": 12,
          "name": "打印纸",
          "type": "hc_type_003",
          "typeName": "纸张",
          "model": "hc_module_03",
          "modelName": "A4",
          "no": "hc1160d",
          "description": "111",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-16 07:24:14",
          "updateTime": "2021-01-23 07:01:13",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/b87557b57ba64ceb8cb6b3245c735a9e.jpg"]
        }
      }, {
        "id": 51,
        "portfolioId": 9,
        "consumableId": 12,
        "replacementTime": "2021-01-27 10:00:00",
        "replacementCycle": "2",
        "expirationTime": "2021-01-27 10:00:00",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:29:42",
        "baseInfo": {
          "id": 12,
          "name": "打印纸",
          "type": "hc_type_003",
          "typeName": "纸张",
          "model": "hc_module_03",
          "modelName": "A4",
          "no": "hc1160d",
          "description": "111",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-16 07:24:14",
          "updateTime": "2021-01-23 07:01:13",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/b87557b57ba64ceb8cb6b3245c735a9e.jpg"]
        }
      }, {
        "id": 57,
        "portfolioId": 9,
        "consumableId": 6,
        "replacementTime": "2021-01-28 10:00:00",
        "replacementCycle": "2",
        "expirationTime": "2021-01-27 10:00:00",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-21 00:46:01",
        "baseInfo": {
          "id": 6,
          "name": "过滤耗材",
          "type": "hc_type_001",
          "typeName": "过滤芯",
          "model": "hc_module_01",
          "modelName": "活性炭",
          "no": "hc560d",
          "description": "22",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-15 10:59:05",
          "updateTime": "2021-01-20 19:41:28",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/b15e978567e74cc997c392b4f0ba4710.jpg"]
        }
      }, {
        "id": 58,
        "portfolioId": 9,
        "consumableId": 13,
        "replacementTime": "2021-01-28 10:00:00",
        "replacementCycle": "2",
        "expirationTime": "2021-01-19 10:00:00",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-21 00:46:01",
        "baseInfo": {
          "id": 13,
          "name": "耗材墨盒",
          "type": "hc_type_002",
          "typeName": "墨盒",
          "model": "hc_module_02",
          "modelName": "硒鼓墨盒",
          "no": "hc000012",
          "description": "22222",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-20 19:32:54",
          "updateTime": "2021-01-23 07:01:05",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/9084d5229db94b959e2e78feba34575f.jpg"]
        }
      }, {
        "id": 59,
        "portfolioId": 9,
        "consumableId": 13,
        "replacementTime": "2021-01-27 10:00:00",
        "replacementCycle": "2",
        "expirationTime": "2021-01-26 10:00:00",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-23 07:27:29",
        "baseInfo": {
          "id": 13,
          "name": "耗材墨盒",
          "type": "hc_type_002",
          "typeName": "墨盒",
          "model": "hc_module_02",
          "modelName": "硒鼓墨盒",
          "no": "hc000012",
          "description": "22222",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-20 19:32:54",
          "updateTime": "2021-01-23 07:01:05",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/9084d5229db94b959e2e78feba34575f.jpg"]
        }
      }, {
        "id": 62,
        "portfolioId": 9,
        "consumableId": 14,
        "replacementTime": "2021-01-29 00:00:00",
        "replacementCycle": "46",
        "expirationTime": "2021-03-16 00:00:00",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-29 21:53:25",
        "baseInfo": {
          "id": 14,
          "name": "铁芯1",
          "type": "hc_type_001",
          "typeName": "过滤芯",
          "model": "hc_module_01",
          "modelName": "活性炭",
          "no": "hc000013",
          "description": "111",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-28 17:02:42",
          "updateTime": "2021-01-28 17:03:05",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210128/2502c24d26614616beeafe0d3ebfbf9c.jpg"]
        }
      }, {
        "id": 63,
        "portfolioId": 9,
        "consumableId": 14,
        "replacementTime": "2021-01-29 00:00:00",
        "replacementCycle": "30",
        "expirationTime": "",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-29 22:27:49",
        "baseInfo": {
          "id": 14,
          "name": "铁芯1",
          "type": "hc_type_001",
          "typeName": "过滤芯",
          "model": "hc_module_01",
          "modelName": "活性炭",
          "no": "hc000013",
          "description": "111",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-28 17:02:42",
          "updateTime": "2021-01-28 17:03:05",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210128/2502c24d26614616beeafe0d3ebfbf9c.jpg"]
        }
      }, {
        "id": 64,
        "portfolioId": 9,
        "consumableId": 14,
        "replacementTime": "2021-01-31 00:00:00",
        "replacementCycle": "30",
        "expirationTime": "",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-29 22:42:51",
        "baseInfo": {
          "id": 14,
          "name": "铁芯1",
          "type": "hc_type_001",
          "typeName": "过滤芯",
          "model": "hc_module_01",
          "modelName": "活性炭",
          "no": "hc000013",
          "description": "111",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-28 17:02:42",
          "updateTime": "2021-01-28 17:03:05",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210128/2502c24d26614616beeafe0d3ebfbf9c.jpg"]
        }
      }],
      "parts": [{
        "id": 26,
        "portfolioId": 9,
        "warrantyPeriod": "3",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:30:29",
        "baseInfo": {
          "id": 13,
          "no": "bj000012",
          "name": "64G存储卡1",
          "type": "bj_type_003",
          "typeName": "存储卡",
          "model": "bj_type_004",
          "modelName": "64G",
          "description": "",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-20 19:54:52",
          "updateTime": "2021-01-23 07:02:26",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/ea6be98a9a864ec49de647bedd7e2263.jpg"]
        }
      }, {
        "id": 27,
        "portfolioId": 9,
        "warrantyPeriod": "2",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:30:29",
        "baseInfo": {
          "id": 13,
          "no": "bj000012",
          "name": "64G存储卡1",
          "type": "bj_type_003",
          "typeName": "存储卡",
          "model": "bj_type_004",
          "modelName": "64G",
          "description": "",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-20 19:54:52",
          "updateTime": "2021-01-23 07:02:26",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/ea6be98a9a864ec49de647bedd7e2263.jpg"]
        }
      }, {
        "id": 28,
        "portfolioId": 9,
        "warrantyPeriod": "12",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:30:29",
        "baseInfo": {
          "id": 12,
          "no": "bj1160d",
          "name": "5号南孚电池",
          "type": "bj_type_002",
          "typeName": "电池",
          "model": "bj_module_02",
          "modelName": "4000ml",
          "description": "电量足22",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-16 01:23:14",
          "updateTime": "2021-01-20 20:08:40",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/9393cacc9125414a942d8ee7fae9de1d.jpg"]
        }
      }, {
        "id": 29,
        "portfolioId": 9,
        "warrantyPeriod": "12",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:30:29",
        "baseInfo": {
          "id": 12,
          "no": "bj1160d",
          "name": "5号南孚电池",
          "type": "bj_type_002",
          "typeName": "电池",
          "model": "bj_module_02",
          "modelName": "4000ml",
          "description": "电量足22",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-16 01:23:14",
          "updateTime": "2021-01-20 20:08:40",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/9393cacc9125414a942d8ee7fae9de1d.jpg"]
        }
      }, {
        "id": 30,
        "portfolioId": 9,
        "warrantyPeriod": "12",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:30:29",
        "baseInfo": {
          "id": 12,
          "no": "bj1160d",
          "name": "5号南孚电池",
          "type": "bj_type_002",
          "typeName": "电池",
          "model": "bj_module_02",
          "modelName": "4000ml",
          "description": "电量足22",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-16 01:23:14",
          "updateTime": "2021-01-20 20:08:40",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/9393cacc9125414a942d8ee7fae9de1d.jpg"]
        }
      }, {
        "id": 31,
        "portfolioId": 9,
        "warrantyPeriod": "12",
        "createUser": 1,
        "createUsername": "",
        "createTime": "2021-01-20 20:30:29",
        "baseInfo": {
          "id": 12,
          "no": "bj1160d",
          "name": "5号南孚电池",
          "type": "bj_type_002",
          "typeName": "电池",
          "model": "bj_module_02",
          "modelName": "4000ml",
          "description": "电量足22",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-16 01:23:14",
          "updateTime": "2021-01-20 20:08:40",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210121/9393cacc9125414a942d8ee7fae9de1d.jpg"]
        }
      }],
      "workConsumables": [{
        "id": 13,
        "orderId": 27,
        "portfolioId": 9,
        "pcId": 46,
        "expirationTime": "2021-03-26 00:00:00",
        "oldExpirationTime": "2021-03-30 00:00:00",
        "createTime": "2021-02-04 16:42:25",
        "createUser": 1,
        "createUsername": "",
        "baseInfo": {
          "id": 13,
          "name": "耗材墨盒",
          "type": "hc_type_002",
          "typeName": "墨盒",
          "model": "hc_module_02",
          "modelName": "硒鼓墨盒",
          "no": "hc000012",
          "description": "22222",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-20 19:32:54",
          "updateTime": "2021-01-23 07:01:05",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/9084d5229db94b959e2e78feba34575f.jpg"]
        }
      }, {
        "id": 14,
        "orderId": 27,
        "portfolioId": 9,
        "pcId": 47,
        "expirationTime": "2021-02-28 00:00:00",
        "oldExpirationTime": "2021-01-30 00:00:00",
        "createTime": "2021-02-04 16:42:25",
        "createUser": 1,
        "createUsername": "",
        "baseInfo": {
          "id": 13,
          "name": "耗材墨盒",
          "type": "hc_type_002",
          "typeName": "墨盒",
          "model": "hc_module_02",
          "modelName": "硒鼓墨盒",
          "no": "hc000012",
          "description": "22222",
          "createUser": 1,
          "createUsername": "admin",
          "createTime": "2021-01-20 19:32:54",
          "updateTime": "2021-01-23 07:01:05",
          "updateUser": 1,
          "updateUsername": "admin",
          "imgUrls": ["http://liyunboji-pub.oss-cn-beijing.aliyuncs.com/boji/rs/20210123/9084d5229db94b959e2e78feba34575f.jpg"]
        }
      }]
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready() {
    wxRequest('api/work-order/info/' + this.properties.infoId, null, 'GET', (res) => {
      this.setData({
        dataList: res.data.data
      })
    })
    // wx.request({
    //   url: 'https://lingyun.labsmart.cn/api/work-order/info/'+this.properties.infoId,
    //   method:"GET",
    //   header:{
    //     token:"9e7b193d-9434-42af-9d8b-f296b059e870"
    //   },
    //   success:(res)=>{

    //     this.setData({
    //       dataList:res.data.data
    //     })
    //     console.log(res)
    //   }
    // })
  }
})