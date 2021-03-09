const app = getApp()
const subscriptSetting = function (next) {
  wx.getSetting({
    withSubscriptions: true,
    success: res => {
      if (!app.globalData.setSubscriptSetting && res.subscriptionsSetting && res.subscriptionsSetting.mainSwitch) {
        if (!res.subscriptionsSetting.itemSettings || !res.subscriptionsSetting.itemSettings['Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4']) {
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
          next();
        }
      }
    }
  })
}
module.exports = subscriptSetting