// pages/components/components.js
import DatabaseService from '../../services/db';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerText: "这里主要将那些具有自有逻辑的代码块（比如生成海报），或者纯粹没有什么逻辑，但在不同使用场景下样式没什么大的区别的功能块（比如轮播图）抽离出来封装成组件。",
    componentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getComponentList()
  },

  // 查库获取demo列表
  async getComponentList() {
    let componentList = await DatabaseService.query('components');
    console.log(componentList)
    this.setData({
      componentList
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