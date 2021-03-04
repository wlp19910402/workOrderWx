const wxRequest = require('../../../utils/request.js')
const API = require('../../../utils/API.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls: {
      type: Array,
      value: []
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    fileUrls:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onUploadImageUrls(urls) {
      this.triggerEvent('setUploadImageUrls', urls)
      console.log("--------------- **** 上传图片组件提交到父级 **** ------------")
    },
    selectFile(files) {
      // 返回false可以阻止某次文件上传
    },
    uploadDelete(file){
      let temp = this.data.fileUrls
      temp.splice( file.detail.index,1)
      this.setData({
        fileUrls:temp
      })
      this.onUploadImageUrls(temp)
    },
    uplaodFile(files) {
      let that = this
      return new Promise((resolve, reject) => {
        let imgUrls = [];
        let index = 0;
        const qmUploadImg = (idx) => {
          let filesName = files.tempFilePaths[idx].split('/')[files.tempFilePaths[idx].split('/').length - 1]
          wxRequest(
            API.UPLOAD_OSS_SIGN, {
              "fileMd5": "",
              "originalName": filesName,
              "share": true,
              "target": ""
            },
            "POST",
            (ossRes) => {
              let ossData = ossRes.data.data
              wx.uploadFile({
                filePath: files.tempFilePaths[index],
                name: "file",
                url: ossData.signInfo.host,
                formData: {
                  name: ossData.fileName,
                  key: ossData.resourceKey,
                  policy: ossData.signInfo.policy,
                  OSSAccessKeyId: ossData.signInfo.accessid,
                  signature: ossData.signInfo.signature,
                  callback: ossData.signInfo.callback
                },
                complete: (completeRes) => {
                  if (completeRes.statusCode === 200 && JSON.parse(completeRes.data).code === 0) {
                    imgUrls.push(JSON.parse(completeRes.data).data.url)
                  } else {
                    imgUrls.push(false)
                  }
                  if (files.tempFilePaths.length === index + 1) {
                    resolve({
                      urls: imgUrls
                    })
                    let tmp = that.data.fileUrls
                    this.onUploadImageUrls([...tmp,...imgUrls])
                    this.setData({
                      fileUrls:[...tmp,...imgUrls]
                    })
                  } else {
                    index++;
                    qmUploadImg(index)
                  }
                }
              })
            }
          )
        }
        qmUploadImg(index)
      })
    },
    uploadError(e) {
      // console.log('upload error', e.detail)
    },
    uploadSuccess(e) {
      // console.log('upload success', e.detail)
    }
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  attached() {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    })
  }
})