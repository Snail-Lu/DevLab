//Component Object
Component({
    properties: {
        show:{
            type: Boolean,
            value: false,
        },
        hotWords: {
            type: Array,
            value: ['iphone 11', '华为Mate 40', '天猫双11', '京东双11']
        }

    },
    data: {
        inputValue: "", // 搜索框输入内容
        searchRecord: [] // 搜索记录
    },
    methods: {
        // 删除搜索记录
        async deleteSearchRecords(){        
            let res = await wx.showModal({ content:'确认要删除最近搜索记录吗？'});
            if(res.confirm){
                wx.removeStorageSync('searchRecord');
                this.setData({
                  searchRecord: []
                })
            }                                               
        },

        // 搜索框输入
        searchInput(e){
            this.setData({                   
                searchWords: e.detail.value.trim(),
            })
        },

        // 搜索
        submitSearch(e){
          let { searchWords, searchRecord } = this.data;
          if(searchWords.length>0){

            //判断搜索历史中是否已经有该关键字
            if(searchRecord.indexOf(searchWords)<0){
              if(searchRecord.length<20){
                searchRecord.unshift(searchWords);
              }else{
                searchRecord.pop();
                searchRecord.unshift(searchWords);
              }
            }
            
            wx.setStorageSync('searchRecord', searchRecord);
            let eventDetail = { value: searchWords }; // detail对象，提供给事件监听函数
            this.triggerEvent('handlesearch', eventDetail)
          }else{
            wx.showToast({
              title: '请输入要搜索的关键字',
              icon: 'none',
            });
          }
          
        },

        // 最近搜索和热搜词搜索
        wordsSearch(e){
          this.triggerEvent('handlesearch', e.currentTarget.dataset)
        }
    },
    created: function(){

    },
    attached: async function(){
        this.setData({
          searchRecord: wx.getStorageSync("searchRecord") || []
        })
    },
    ready: function(){

    },
    moved: function(){

    },
    detached: function(){

    },
});