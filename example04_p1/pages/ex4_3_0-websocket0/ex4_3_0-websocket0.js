// pages/ex4_3_0-websocket0/ex4_3_0-websocket0.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  click:function(e) {
    wx.connectSocket({
      url: 'ws://localhost:9001/',
      success:function() {
        console.log("sokect","connect success")
      }
    })

  },
  send:function(e) {
    wx.sendSocketMessage({
      data: "这是小程序",
    })
  },
  end:function(e) {
    console.log("close");
    wx.closeSocket({
      success:function() {
        console.log("sokect","close success")
      }
    }
    )
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