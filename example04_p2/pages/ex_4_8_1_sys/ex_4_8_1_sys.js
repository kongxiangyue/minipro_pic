// pages/ex_4_8_1_sys/ex_4_8_1_sys.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getSystemInfo: function(e) {
    wx.getSystemInfo({
      success (res) {
        console.log("sys", res.model)
        console.log("sys", res.pixelRatio)
        console.log("sys", res.windowWidth)
        console.log("sys", res.windowHeight)
        console.log("sys", res.language)
        console.log("sys", res.version)
        console.log("sys", res.platform)
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