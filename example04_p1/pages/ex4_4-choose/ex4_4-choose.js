// pages/ex4_4-choose/ex4_4-choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  choose:function(e) {

    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        that.setData({ src: res.tempFilePaths});
         
      }
    })
  },
  preview:function(e) {
    wx.previewImage({
      current: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587486207720&di=6ab03bf8b4ff27156a23b53926264acc&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F39%2F11%2F65%2Fpic_lib%2Fs960x639%2FCaribbean02s960x639.jpg', // 当前显示图片的http链接
      urls: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587486207720&di=6ab03bf8b4ff27156a23b53926264acc&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F39%2F11%2F65%2Fpic_lib%2Fs960x639%2FCaribbean02s960x639.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587486209804&di=688148e5e2f295f1788255305e11d7a5&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F22%2F1533134156-hoHvzKImuq.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587486211425&di=0a318d1eeedd678c40b45d8548a552ff&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201310%2F19%2F235356fyjkkugokokczyo0.jpg"] // 需要预览的图片http链接列表
    })

  },
  getinfo:function(e) {
    wx.getImageInfo({
      src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587486207720&di=6ab03bf8b4ff27156a23b53926264acc&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F39%2F11%2F65%2Fpic_lib%2Fs960x639%2FCaribbean02s960x639.jpg",
      success(res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  },
  save:function(e) {
    wx.downloadFile({
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587486207720&di=6ab03bf8b4ff27156a23b53926264acc&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F39%2F11%2F65%2Fpic_lib%2Fs960x639%2FCaribbean02s960x639.jpg",
      success:function(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success:function(res) {
            console.log(res)
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