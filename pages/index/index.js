

import {IndexModel} from "../../models/index.js"
import {random} from "../../utils/random.js"
const indexModel = new IndexModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],
    markList: [],
    recommend: {},
    getMore: '',
    magazineId: '0',
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  onCatalog() {
    wx.switchTab({
      url: "/pages/catalog/catalog"
    });
    
  },
  onNav(e) {
    const index = e.detail.index;
    this.setData({
      magazineId: index,
      articleList: [],
      markList: [],
      recommend: {},
    });
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    });
    this.getData();
  },


  getData() {
    const magazineId = this.data.magazineId;
    const articleList = indexModel.getArticleList(magazineId);
    const markList = indexModel.getMarkList(magazineId);
    const recommend = indexModel.getRecommendInfo(magazineId);
    Promise.all([articleList, markList, recommend]).then(res => {
      this.setData({
        articleList: res[0],
        markList: res[1],
        recommend: res[2]
      })
      this.hideLoading();
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  hideLoading() {
    this.setData({
      loading:false
    })
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
    this.setData({
      getMore: random(20)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})