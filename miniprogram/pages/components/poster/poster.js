// pages/components/example/example.js
import DatabaseService from '../../../services/db'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxacodeSrc: '',
    wxacodeResult: '',
    showClearWXACodeCache: false,
    show: false,
    tableHeader: [
      { prop: 'property', label: '属性' },
      { prop: 'type', label: '类型' },
      { prop: 'defaultValue', label: '默认值'},
      { prop: 'desc', label: '说明' }
    ],
    tableData: [
      { property: 'show', type: 'Boolean', defaultValue: 'false', desc: '组件显示'},
      { property: 'source', type: 'Object', defaultValue: '{posterImageUrl:""}', desc: '海报数据'},
      { property: 'bindtapclose', type: 'Function', defaultValue: 'none', desc: '隐藏海报事件处理函数'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 获取海报配置
  async getPosterConfig() {
    let res = await DatabaseService.query('config', { configKey: 'share-poster'});
    console.log(res)
    if(res.length>0){
      this.setData({
        posterInfo: res[0].configValue,
        show: true
      })
    } else {
      wx.showToast({ title: '没有查找到配置的海报数据', icon: 'none' })
    }
  },

  // 关闭海报
  hideSharePosterModal(){
    this.setData({
      show: false
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