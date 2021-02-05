// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: response => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = response.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(response)
              }
              wx.login({
                success: resLogin => {
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  console.log(resLogin)
                  if (resLogin.code) {
                    console.log(1)
                    //发起网络请求
                    wx.request({
                      url: 'https://lingyun.labsmart.cn/api/sys/login',
                      method:"post",
                      data: {
                        code: resLogin.code,
                        username:"admin",
                        password:"123456"
                      },
                      header: {
                        'content-type': 'application/json' // 默认值
                      },
                      success:res=>{
                        console.log(res)
                      }
                    })
                  } else {
                    console.log('登录失败！' + resLogin.errMsg)
                  }
                }
              })
            }
          })
        }else{
          if(!this.userInfo){
            wx.showModal({
              title:"未登录",
              content:"您未登录，请登录后在访问！",
              showCancel:false,
              confirmColor:"#46b989",
              confirmText:"去登陆",
              success:(res)=>{
                console.log(res)
                if(res.confirm){
                  wx.reLaunch({
                    url: '/pages/login/login',
                  })
                }
              }
            })
          }
        }
      }
    })
  },
  globalData: {
    userInfo: null,
  }
})
