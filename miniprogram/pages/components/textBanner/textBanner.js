// pages/components/textbanner/textbanner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '+
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'+
                'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'+
                ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia '+
                'deserunt mollit anim id est laborum.',
    tableHeader: [
      { prop: 'property', label: '属性' },
      { prop: 'type', label: '类型' },
      { prop: 'defaultValue', label: '默认值'},
      { prop: 'desc', label: '说明' }
    ],
    tableData: [
      { property: 'source', type: 'String', defaultValue: 'none', desc: '组件中显示的文字'},
      { property: 'use-custom-class', type: 'Boolean', defaultValue: 'false', desc: '是否使用自定义的组件样式，需要配合custom-class同时使用'},
      { property: 'custom-class', type: 'String', defaultValue: 'none', desc: '组件的自定义样式类，需要配合use-costom-class同时使用'}
    ]
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