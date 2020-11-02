// pages/components/table/table.js
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
        property: 'header', 
        type: 'Array', 
        defaultValue: '[]', 
        desc: '表格头配置,每个数据项的格式为{prop:"",label:""}，其中prop的值是对应表格数据项的属性，label的值为表头描述'
      },
      { property: 'source', type: 'Array', defaultValue: '[]', desc: '表格数据配置'},
    ],
    exampleHeader: [
      { prop: 'name', label: '姓名' },
      { prop: 'age', label: '年龄' },
      { prop: 'gender', label: '性别'},
      { prop: 'level', label: '等级' }
    ],
    exampleTableData: [
      { name: '唐三', age: '16', gender: '男', level: '59'},
      { name: '小舞', age: '100000', gender: '女', level: '57'},
      { name: '小奥', age: '16', gender: '男', level: '60' },
      { name: '荣荣', age: '16', gender: '女', level: '62' }
    ],
    htmlSnip: 
    `
      <table 
        header="{{tableHeader}}"
        source="{{tableData}}"
      >
      </table>

      tableleHeader: [
        { prop: 'name', label: '姓名' },
        { prop: 'age', label: '年龄' },
        { prop: 'gender', label: '性别'},
        { prop: 'birthday', label: '生日' }
      ],

      tableData: [
        { name: '唐三', age: '16', gender: '男', level: '59'},
        { name: '小舞', age: '100000', gender: '女', level: '57'},
        { name: '小奥', age: '16', gender: '男', level: '60' },
        { name: '荣荣', age: '16', gender: '', level: '62' }
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