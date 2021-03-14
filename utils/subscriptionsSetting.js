const app = getApp()
const subscriptSetting = function (next,params=false) {
  if ((app.globalData.userInfo||params)) {
    wx.getSetting({
      withSubscriptions: true,
      success: res => {
        if (!res.subscriptionsSetting.itemSettings || !res.subscriptionsSetting.itemSettings['Xr_SZnAXvxbR8xs0SDLfR9a3cU-V_yqfIxNGP6MJCDk']) {
          // ---没有订阅
          wx.requestSubscribeMessage({
            tmplIds: ["Xr_SZnAXvxbR8xs0SDLfR9a3cU-V_yqfIxNGP6MJCDk","Oc5JLnSTjEsFvyAbJKMg-jehYz0xq3J8JphRsylUo9E"],
            complete: function (rdes) {
              // app.globalData.setSubscriptSetting = true
             if(next) next();
            }
          })
        } else {
          // 继续下一步
          // app.globalData.setSubscriptSetting = true
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