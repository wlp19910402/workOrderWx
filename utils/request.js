const wxRequest = (url, data, method, callback, errCallback) => {
  // wx.getSetting({
  //   withSubscriptions: true,
  //   success: res => {
  //     if (!res.authSetting['scope.userInfo']) {
  //       wx.reLaunch({
  //           url: '/pages/login/login',
  //       })
  //       return
  //     }}
  // })

  return wx.request({
    url: 'https://lingyun.labsmart.cn/' + url,
    data: data,
    header: {
      'content-type': 'application/json',
      "token": wx.getStorageSync('token')
    },
    method: method,
    success: function (res) {
      if (res.data.code === 0) {
        wx.hideLoading()
        if (callback) callback(res)
      } else if (res.data.code === 301) {
        // wx.hideLoading()
        wx.showModal({
          title: "需要登录",
          content: "请登录后在访问！",
          showCancel: false,
          confirmColor: "#46b989",
          confirmText: "去登录",
          success: (res) => {
            if (res.confirm) {
              wx.reLaunch({
                url: '/pages/login/login',
              })
            }
          }
        })
      } else {
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 3000,
        })
        if (errCallback) errCallback(res)
      }
    },
    fail: function () {
      wx.showToast({
        title: "网络连接超时",
        icon: 'none',
        duration: 3000
      })
    }
  })
}
module.exports = wxRequest