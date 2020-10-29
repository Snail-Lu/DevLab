//Component Object
Component({
    properties: {
        source: {
            type: Array,
            value: ['screen-A', 'screen-B', 'screen-C', 'screen-D']
        },
        // 指示点
        indicatorDots: {
            type: Boolean,
            value: true
        },
        // 自动播放
        autoplay: {
            type: Boolean,
            value: true
        },
        // 播放间隔
        interval: {
            type: Number,
            value: 1500
        },
        // 切换动画时长
        duration: {
            type: Number,
            value: 500
        },
        // 首尾衔接
        circular: {
            type: Boolean,
            value: true
        },
        // 全屏
        fullScreen: {
            type: Boolean,
            value: false
        }

    },
    observers: {
        'fullScreen': function(val){
            if(val){
                this.getScreenInfo()
            }else{
                this.setData({
                    screenHeight: 300
                })
            }
        }
    },
    data: {
        screenHeight: 300,
    },
    methods: {
        async getScreenInfo(){
            let systemInfo = await wx.getSystemInfo();
            console.log(systemInfo)
            const windowWidth = systemInfo.windowWidth;
            const windowHeight = systemInfo.windowHeight;
            let height = windowHeight*750/windowWidth; 
            console.log(height)
            this.setData({
                screenHeight: height
            })
        }
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
