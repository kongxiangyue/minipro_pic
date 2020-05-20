// pages/ex_4_7_1_location/ex_4_7_1_location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getLocation:function(e) {
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log("location", "纬度", latitude)
        console.log("location", "经度", longitude)
        console.log("location", "速度", speed)
        console.log("location", "精确度", accuracy)
        
      }
     })

  },

  chooseLocation:function(e) {
    wx.chooseLocation({
      complete: (res) => {
        console.log("location", res)
      },
    })

  },
  openLocation:function(e) {
    wx.getLocation({
      type: 'gcj02', 
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
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