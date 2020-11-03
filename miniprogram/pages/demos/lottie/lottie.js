// pages/demos/lottie/lottie.js
const app = getApp();
import lottie from 'lottie-miniprogram'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inited: false,
    index: 1,
  },

  // 初始化
  init() {
    const { inited, index } = this.data;
    if (inited) {
      return
    }
    const query = wx.createSelectorQuery();
    query.selectAll('#lottie-canvas').node((res)=>{
      const canvas = res[0].node
      const context = canvas.getContext('2d')
      canvas.width = 300
      canvas.height = 300
      lottie.setup(canvas)
      this.ani = lottie.loadAnimation({
        loop: true,
        autoplay: true,
        animationData: require(`./data/data${index}.js`),
        rendererSettings: {
          context,
        },
      })
      this.setData({
        inited: true
      })
    }).exec()
  },

  // 播放
  play() {
    if (this.ani) {
      this.ani.play()
    } else {
      wx.showToast({ title: '请先进行初始化', icon: 'none' })
    }
  },

  // 暂停
  pause() {
    if(this.ani) {
      this.ani.pause()
    } else {
      wx.showToast({ title: '请先进行初始化', icon: 'none' })
    }
  },

  //切换动画
  switch() {
    const { index } = this.data;
    if(this.ani) {
      this.ani.destroy();
    }
    this.setData({
      inited: false,
      index: index==1?2:1
    },()=>{
      wx.showToast({ title: '切换成功，请进行初始化操作', icon: 'none' })
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