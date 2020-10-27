// pages/components/components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridCount: 4,
    gridHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { gridCount } = this.data;
    let _this = this;
    wx.getSystemInfo({
      success (res) {
        let gridHeight = res.windowWidth * res.pixelRatio / gridCount;
        _this.setData({
          gridHeight
        })
      }
    })
  },

  /**
   * 页面跳转
   */
  bindNavigate(){
    wx.navigateTo({
      url: './example/example',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
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