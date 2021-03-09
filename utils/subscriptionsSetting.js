const subscriptSetting = function(next){
  wx.getSetting({
    withSubscriptions: true,
    success: res => {
      if(res.subscriptionsSetting && res.subscriptionsSetting.mainSwitch){
        if(!res.subscriptionsSetting.itemSettings || !res.subscriptionsSetting.itemSettings['Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4']){
          console.log(res)
          // ---没有订阅
          // wx.requestSubscribeMessage({
          //   tmplIds: ["Xr_SZnAXvxbR8xs0SDLfR1lzkR61oZQdM9vkK_5s6x4"],
          //   complete: function (rdes) {
          //     console.log(rdes)
          //     next();
          //   }
          // })
          next();
        }else{
          // 继续下一步
          next();
        }
      }
    }
  })
}
module.exports = subscriptSetting