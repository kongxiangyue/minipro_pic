// pages/ex4_3-websocket/ex4_3-websocket.js
Page({
  socketOpen :false,

  /**
   * 页面的初始数据
   */
  data: {
    sendarray:[],
    receivearray:[]
  },

  onConnect:function(e) {
    var that = this
    wx.connectSocket({
      url: 'ws://localhost:9001/',
      success:function() {
        that.socketOpen = true
        console.log("sokect","connect success")

        wx.onSocketMessage((result) => {
          that.data.receivearray.push(result.data)
          that.setData({
            receivearray:that.data.receivearray
          });
        })
      }
    })
  },
  onClose:function(e) {
    console.log("close");
    wx.closeSocket({
      success:function() {
        console.log("sokect","close success")
      }
    }
    )
  },
  getMessage:function(e) {
    this.input = e.detail.value
  },

  onsend:function(e) {
    var that =this;
    if (that.socketOpen ) {
      wx.sendSocketMessage({
        data: that.input,
        success: function(e) {
          that.data.sendarray.push(that.input)
          that.setData({sendarray:that.data.sendarray})
        }
      })
    }
   
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