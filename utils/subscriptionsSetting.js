const app = getApp()
const subscriptSetting = function (next) {
  console.log("---------subscriptSetting-------")
  if (!app.globalData.setSubscriptSetting && app.globalData.userInfo) {
    wx.getSetting({
      withSubscriptions: true,
      success: res => {
        console.log(res)
        if (!res.subscriptionsSetting.itemSettings || !res.subscriptionsSetting.itemSettings['Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4']) {
          console.log("---------res-------")
          // ---没有订阅
          wx.requestSubscribeMessage({
            tmplIds: ["Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4"],
            complete: function (rdes) {
              app.globalData.setSubscriptSetting = true
              next();
            }
          })
        } else {
          // 继续下一步
          app.globalData.setSubscriptSetting=true
          next();
        }
      }
    })
  } else {
    // 继续下一步
    next();
  }
}
module.exports = subscriptSetting