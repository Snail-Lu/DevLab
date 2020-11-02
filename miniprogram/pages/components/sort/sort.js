// pages/components/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableHeader: [
      { prop: 'property', label: '属性' },
      { prop: 'type', label: '类型' },
      { prop: 'defaultValue', label: '默认值'},
      { prop: 'desc', label: '说明' }
    ],
    tableData: [
      { 
        property: 'source', 
        type: 'Array', 
        defaultValue: '[]', 
        desc: '排序列表数据，数据项格式为{prop:"", label: ""}，prop为要排序字段，label为显示的标签值'
      }
    ],
    sortList: [
      { prop: 'sales', label:'销量' },
      { prop: 'date', label: '上市时间' }, 
      { prop: 'price', label: '价格' }, 
      { prop: 'rating', 'label': '评分' }
    ],
    htmlSnip: 
    `
    <sort source="{{sortList}}"></sort>

    sortList: [
      { prop: 'sales', label:'销量' },
      { prop: 'date', label: '上市时间' }, 
      { prop: 'price', label: '价格' }, 
      { prop: 'rating', 'label': '评分' }
    ]
    `
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