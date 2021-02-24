// components/common/qm-detail-images/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls:{type:Array,value:[]}
  },
  /**
   * 组件的方法列表
   */
  methods: {
    previewImg(e){
      wx.previewImage({
        urls:this.data.imgUrls,
        current:e.currentTarget.id
      })
    },
  }
})
