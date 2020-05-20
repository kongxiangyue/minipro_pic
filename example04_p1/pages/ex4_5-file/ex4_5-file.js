// pages/ex4_5-file/ex4_5-file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onSave:function(e) {
    wx.downloadFile({
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587486207720&di=6ab03bf8b4ff27156a23b53926264acc&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F39%2F11%2F65%2Fpic_lib%2Fs960x639%2FCaribbean02s960x639.jpg",
      success(res) {
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success:function(e) {
            console.log("file", "本地文件路径：" + res.tempFilePath);
          }
        })
      }
    })
  },
  onList:function(e) {
    wx.getSavedFileList({
      success(res) {
        for(var i= 0; i < res.fileList.length; i++) {
          var file = res.fileList[i];
          console.log("file", "序号-创建时间-大小-路径"
          , i 
          , file.createTime
          , file.size
          , file.filePath);
        }
      },
    })
  },

  onOpen:function(e) {
    wx.downloadFile({
      url: 'https://www.gupt.net/Up/month_1905/201905081529269207.pdf',
      success(res){
        console.log("file", "下载成功")
        wx.openDocument({
          filePath: res.tempFilePath,
          success:function(res) {
            console.log("file", "打开成功")
          }
        })
      }
    })


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