// pages/my/my.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    moduleData: [
      [{
        name: "新消息通知",
        icon: "icon-comment",
        link: "/",
        isLogin: false
      }],
      [{
          name: "帮助与反馈",
          icon: "icon-prompt",
          link: "/",
          isLogin: false
        },
        {
          name: "服务条款及隐私",
          icon: "icon-explain",
          link: "/",
          isLogin: false
        }
      ],
      [{
        name: "关于引用",
        icon: "icon-help",
        link: "/",
        isLogin: false
      }],
      [{
        name: "邀请好友",
        icon: "icon-share",
        link: "/",
        isLogin: true
      }, ],
      [{
          name: "绑定手机",
          icon: "icon-lock",
          link: "/",
          isLogin: true
        },
        {
          name: "修改密码",
          icon: "icon-lock",
          link: "/",
          isLogin: true
        }
      ],
      [{
        name: "退出登录",
        icon: "icon-sign-out",
        link: "/",
        isLogin: true
      }]
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})