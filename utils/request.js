const wxRequest=(url, data, method,callback,errCallback)=>{
  return wx.request({
    url:'https://lingyun.labsmart.cn/'+ url,
    data: data,
    header: {
      'content-type': 'application/json',
      "token":wx.getStorageSync('token')
    },
    method:method,
    success: function (res) {
      wx.hideLoading()
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
       if(errCallback) errCallback(res)
      }
    },
    fail: function (res) {
      wx.hideLoading()
      wx.showToast({
      title: "网络连接超时",
      icon: 'none',
      duration: 3000,
      })
    }
  })
}
module.exports = wxRequest
