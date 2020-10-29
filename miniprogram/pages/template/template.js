// pages/templates/templates.js
import DatabaseService from '../../services/db';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerText: '这里主要将那些没有自有逻辑、纯展示的代码块抽离出来写成模板。'+
                '引入模板的页面只需要将数据传递给模板，模板渲染出来即可。'+
                '模板中的元素的事件处理函数写在引入的页面中，不需要像组件那样繁琐的触发。模板相较于组件更加轻量化。',
    templateList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTemplateList()
  },

  // 页面跳转
  bindNavigate(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
      success: function(res){
        // success
        console.log(res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  // 查库获取template列表
  async getTemplateList() {
    let templateList = await DatabaseService.query('templates');
    console.log(templateList)
    this.setData({
      templateList
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