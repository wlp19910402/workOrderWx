const wxRequest=(url, data, method,callback)=>{
  return wx.request({
    url:'https://lingyun.labsmart.cn/'+ url,
    data: data,
    header: {
      'content-type': 'application/json',
      "token":wx.getStorageSync('token')
    },
    method:method,
    success: function (res) {
      if(res.data.code===0){
        if(callback) callback(res)
      }else if(res.data.code===301){
          wx.showModal({
            title: "登录超时",
            content: "请重新登录后在访问！",
            showCancel: false,
            confirmColor: "#46b989",
            confirmText: "去登陆",
            success: (res) => {
              console.log(res)
              if (res.confirm) {
                wx.reLaunch({
                  url: '/pages/login/login',
                })
              }
            }
          })
      }else{
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 3000,
        })
      }
    },
    fail: function (res) {
      wx.showToast({
      title: "网络连接超时",
      icon: 'none',
      duration: 3000,
      })
    }
  })
}
module.exports = wxRequest
