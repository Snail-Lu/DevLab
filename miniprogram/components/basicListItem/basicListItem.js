//Component Object
Component({
    properties: {
        source:{
            type: Object,
            value: {}
        },

    },
    data: {

    },
    methods: {
        /**
         * 页面跳转
         */
        bindNavigate(e){
            const { path, status } = e.currentTarget.dataset;
            if (status&&path) {
                wx.navigateTo({ url: e.currentTarget.dataset.path })
            } else if (!status) {
                wx.showToast({ title: '这个组件还没有开发完呢~', icon: 'none' })
            } else if(!path) {
                wx.showToast({ title: '不知道该去哪儿肿么办o(╥﹏╥)o', icon: 'none' })
            }
        },
    },
    created: function(){

    },
    attached: function(){

    },
    ready: function(){

    },
    moved: function(){

    },
    detached: function(){

    },
});