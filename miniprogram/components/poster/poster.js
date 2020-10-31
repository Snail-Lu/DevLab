import { cloudRequest } from '../../utils/http.js'

Component({
    properties: {
       isShow:{
            type: Boolean,
            value: false
        },
        posterInfo: {
            type: Object,
            value: {}
        }
    },
    observers: {
        'isShow': function(isShow){
            if(isShow){
                this.createPoster();
            }else{
                this.setData({
                    canvas: null,
                })
            }
        }
    },
    data: {
        canvas: null
    },
    methods: {


        /**
         * 绘制分享海报 
         * @param filePath  太阳码存储路径
         */ 
        async createPoster(qrCode){
            const { posterInfo } = this.data;
            console.log(posterInfo)
            // 网络图片需要先下载
            let mainPicInfo = await wx.getImageInfo({ src: posterInfo.posterImageUrl });
            if(mainPicInfo){
                let mainPicFilePath = mainPicInfo.path;
                const query = wx.createSelectorQuery().in(this);
                query.select('#share-poster').fields({ node: true, size: true }).exec((res)=>{
                    const canvas = res[0].node;
                    const cvsCtx = canvas.getContext('2d');

                    this.setData({ canvas });

                    //设置宽高，解决尺寸问题
                    const dpr = wx.getSystemInfoSync().pixelRatio;
                    canvas.width = 300 * dpr;
                    canvas.height = 496 * dpr;
                    cvsCtx.scale(dpr, dpr)
                    
                    
                    // 绘制背景和海报主图
                    cvsCtx.fillStyle = "#ffffff";
                    cvsCtx.fillRect(0,0,300,496);
                    
                    let mainImg = canvas.createImage();
                    mainImg.src = mainPicFilePath;
                    mainImg.onload = function(){
                        cvsCtx.drawImage(mainImg,0,0,300,496);
                    }
                    cvsCtx.save();
                });
                
            }else{
                log('download main share picture fail !',mainPicInfo);
                this.bindCloseClick();
            }
        },

        /**
         * 将画布导出为图片 
         */
        async exportCanvasToImage(){
            let canvas = this.data.canvas;
            try{
                let tempFile = await wx.canvasToTempFilePath({ 
                    canvas,
                 })
                if(tempFile&&tempFile.tempFilePath){
                    this.setData({sharePosterFile:tempFile});
                }else{
                    wx.showModal({ title: '海报生成失败', icon:'none'} );
                }
            }catch(err){
                wx.showModal({ title:'海报生成失败', icon:'none' });
            }
            
        },

        /**
         * 保存海报到本地
         */
        async bindSaveSharePoster(){
            await this.exportCanvasToImage();
            let  {sharePosterFile } = this.data;
            try{
                let saveResult = await wx.saveImageToPhotosAlbum({ filePath:sharePosterFile.tempFilePath });
                if(saveResult){
                    let confirm = await wx.showModal({title: '图片已保存到相册，赶紧分享吧~', icon:'none'});
                    if(confirm){
                        this.setData({
                        isShowSharePoster:false,
                        isShowMask:false
                        })
                    }
                }else{
                await wx.showModal({ title:'图片保存失败！', icon: 'none' });
                }
            }catch{
                await wx.showModal({ title:'图片保存失败！', icon: 'none' });
            }
            
        },

        /**
         * 关闭分享海报
         */
        bindClosePoster(){
            this.triggerEvent('tapclose');
        }
    },
});