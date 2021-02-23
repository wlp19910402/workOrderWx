const homeMenuModule=[{
  id:0,
  name: "扫码",
  icon: "icon-saoma qm-menu-color1",
  link: "/pages/client/portfolio/list/list",
},
{
  id:1,
  name: "联系客服",
  icon: "icon-telephone",
  link: "/pages/client/portfolio/list/list",
}
// {
//   name: "日志",
//   icon: "icon-comment",
//   link: "/pages/logs/logs"
// }
]
Page({
  data: {
    background: ['/static/img/home/banner2.jpg', '/static/img/home/banner1.jpg', '/static/img/home/banner3.jpg'],
    adBannder:['/static/img/home/ad-banner4.jpg','/static/img/home/ad-banner1.jpg','/static/img/home/ad-banner5.jpg'],
    indicatorDots: true,
    vertical: true,
    circular: true,
    autoplay: false,
    interval: 2000,
    duration: 500,
    homeMenuModule:homeMenuModule
  },
  clickHomeMenu:(e)=>{
    var $id = e.currentTarget.dataset.id; 
    if($id===0){
      wx.scanCode({
        complete: (res) => {
            wx.navigateTo({
              url: '/pages/client/portfolio/scan/scan?qrCode='+res.result,
            })
        }
      })
    }else{
      wx.navigateTo({
        url:homeMenuModule.find(item=>item.id===$id).link ,
      })
    }
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  }
})