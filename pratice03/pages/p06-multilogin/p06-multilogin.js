// pages/p06-multilogin/p06-multilogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab0class: "title select",
    tab1class: "title default"
  },
  onNav : function(e, o) {
    console.log(e);
    if (0 == e.currentTarget.dataset.current) {
      this.setData({
        tab0class: "title select",
        tab1class: "title default",
        curTab : 0
      });
    } else if (1 == e.currentTarget.dataset.current) {
      this.setData({
        tab0class: "title default",
        tab1class: "title select",
        curTab: 1
      });
    }

  },
  onSwiperChange:function(e) {
    console.log(e.detail.source);
    if (e.detail.source != "touch") return; 
    if (0 == e.detail.current)  {
      this.setData({
        tab0class: "title select",
        tab1class: "title default"
      });
    } else if (1 == e.detail.current) {
      this.setData({
        tab0class: "title default",
        tab1class: "title select"
      });

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