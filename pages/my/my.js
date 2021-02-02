// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moduleData: [
      [ {
        name: "新消息通知",
        icon: "icon-comment",
        link: "/",
        isLogin: false
      } ],
      [ {
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
      } ],
      [
        {
          name: "关于引用",
          icon: "icon-help",
          link: "/",
          isLogin: false
        }
      ], [
        {
          name: "邀请好友",
          icon: "icon-share",
          link: "/",
          isLogin: true
        },
      ],
      [ {
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
      [
        {
          name: "退出登录",
          icon: "icon-sign-out",
          link: "/",
          isLogin: true
        }
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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