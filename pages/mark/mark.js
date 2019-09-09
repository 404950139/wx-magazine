// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    articleList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataF();
  },
  getDataF() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              })
              this.getData();
            }
          })
        }
      }
    })
  },
  onUserInfo(e) {
    const userInfo = e.detail;
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
        authorized: true
      })
      this.getData();
    }
  },
  getData() {
    const articleList = wx.getStorageSync("like") || [];
    this.setData({
      articleList: articleList
    })
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
    this.getData();
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