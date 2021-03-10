const app = getApp()
const subscriptSetting = function (next,params=false) {
  if (!app.globalData.setSubscriptSetting && (app.globalData.userInfo||params)) {
    wx.getSetting({
      withSubscriptions: true,
      success: res => {
        if (!res.subscriptionsSetting.itemSettings || !res.subscriptionsSetting.itemSettings['Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4']) {
          // ---没有订阅
          wx.requestSubscribeMessage({
            tmplIds: ["Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4"],
            complete: function (rdes) {
              app.globalData.setSubscriptSetting = true
             if(next) next();
            }
          })
        } else {
          // 继续下一步
          app.globalData.setSubscriptSetting = true
          if(next) next();
        }
      }
    })
  } else {
    // 继续下一步
    if(next) next();
  }
}
module.exports = subscriptSetting