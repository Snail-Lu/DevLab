import { cloudRequest } from '../../utils/http.js'

Component({
    properties: {
       isShow:{
            type: Boolean,
        },
        posterInfo: {
            type: Object
        },
        staffInfo: {
            type: Object
        }
    },
    observers: {
        'isShow': function(isShow){
            if(isShow){
                this.bindCreateSharePoster();
                // this.queryPosterConfig();
                // this.onQuery();
            }else{
                this.setData({
                    canvas: null,
                })
            }
        }
    },
    data: {
    },
    methods: {
        /**
         * 生成分享海报
         */
        async bindCreateSharePoster(){
            
            try{
                let res = await cloudRequest('openapi', { action: 'getWXACode'});
                if(res.result){
                    this.drawSharePoster(res.result);
                    // 将太阳码存入本地
                    // let timeStamp = new Date().getTime();
                    // let qrCodeBuffer = PlatformService.base64ToArrayBuffer(qrCode.message);
                    // let qrCodeFilePath = wx.env.USER_DATA_PATH+'/poster_code_' + timeStamp + '.jpeg';
                    // let writeRes = await PlatformService.writeFileToLocal(qrCodeFilePath,qrCodeBuffer,'base64');
                    // // 绘制海报
                    // if(writeRes){
                    //     this.drawSharePoster(qrCodeFilePath);
                    // }else{
                    //     log('write share poster file fail!',writeRes);
                    //     this.setData({ isShow: false })
                    // }      
                }else{
                    // PlatformService.showModalTips('海报生成失败！');
                    // PlatformService.hideLoading();
                    this.bindCloseClick()
                }
            }catch(err){
                // PlatformService.showModalTips(err.message?err.message:'海报生成失败！');
                // PlatformService.hideLoading();
                this.bindCloseClick();
            }
        },


        /**
         * 绘制分享海报 
         * @param filePath  太阳码存储路径
         */ 
        async drawSharePoster(qrCode){
            // 网络图片需要先下载
            let mainPicInfo = await wx.getImageInfo({ src: qrCode });
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
                    canvas.height = 440 * dpr;
                    cvsCtx.scale(dpr, dpr)
                    
                    
                    // 绘制背景和海报主图
                    cvsCtx.fillStyle = "#ffffff";
                    cvsCtx.fillRect(0,0,300,440);
                    
                    let mainImg = canvas.createImage();
                    mainImg.src = mainPicFilePath;
                    mainImg.onload = function(){
                        cvsCtx.drawImage(mainImg,0,0,300,325);
                    }
                    cvsCtx.save();

                    // 绘制海报名称
                    // cvsCtx.setTextAlign('left');
                    cvsCtx.fillStyle = '#070707';
                    cvsCtx.font = "15px sans-serif";
                    cvsCtx.fillText(this.singleLineOverFlow(cvsCtx,this.data.posterInfo.title,185), 10, 350, 185);
                    cvsCtx.save();

                    // 绘制海报副标题
                    cvsCtx.fillStyle = "#f4f4f4";
                    cvsCtx.fillRect(20,360,180,50);
                    cvsCtx.fillStyle = '#070707';
                    cvsCtx.font = "11px sans-serif";
                    // cvsCtx.fillText(this.data.posterInfo.subTitle, 25, 375, 185);
                    this.drawText(cvsCtx,this.data.posterInfo.subTitle,25,375,175);
                    cvsCtx.save();

                    // 绘制太阳码
                    let qrImg = canvas.createImage();
                    qrImg.src = qrCode;
                    qrImg.onload = function(){
                        cvsCtx.drawImage(qrImg, 215, 335, 70, 70);
                    }
                    cvsCtx.save();

                    // 绘制提示文字
                    cvsCtx.font = "11px sans-serif";
                    cvsCtx.fillStyle = '#000000';
                    cvsCtx.fillText('长按进入小程序', 210, 420);
                    cvsCtx.save();
                    cvsCtx.stroke();

                    PlatformService.hideLoading();
                });
                
            }else{
                log('download main share picture fail !',mainPicInfo);
                this.bindCloseClick();
            }
        },


        /**
         * 单行文本溢出添加省略号 
         */
        singleLineOverFlow(_ctx, str, maxWidth) {
            let strWidth = _ctx.measureText(str).width;
            const ellipsis = '…';
            const ellipsisWidth = _ctx.measureText(ellipsis).width;
            if (strWidth <= maxWidth || maxWidth <= ellipsisWidth) {
            return str;
            } else {
            var len = str.length;
            while (strWidth >= maxWidth - ellipsisWidth && len-- > 0) {
                str = str.slice(0, len);
                strWidth = _ctx.measureText(str).width;
            }
            return str + ellipsis;
            }
        },

        /**
         * 将画布导出为图片 
         */
        async exportCanvasToImage(){
            let canvas = this.data.canvas;
            try{
                let tempFile = await PlatformService.canvasToTempFilePath({ canvas });
            if(tempFile&&tempFile.tempFilePath){
                this.setData({sharePosterFile:tempFile});
            }else{
                PlatformService.hideLoading();
                PlatformService.showModalTips('海报生成失败');
            }
            }catch(err){
                PlatformService.hideLoading();
                PlatformService.showModalTips('海报生成失败');
            }
            
        },

        /**
         * 保存分享海报 
         */
        async bindSaveSharePoster(){
            PlatformService.showLoading({title:'正在保存'});
            await this.exportCanvasToImage();
            let {sharePosterFile} =this.data;
            try{
                let saveResult = await PlatformService.saveImageToPhotosAlbum({filePath:sharePosterFile.tempFilePath});
                if(saveResult){
                PlatformService.hideLoading();
                let confirm = await PlatformService.showModalTips('图片已保存到相册，赶紧分享把~');
                if(confirm){
                    this.setData({
                    isShowSharePoster:false,
                    isShowMask:false
                    })
                }
                }else{
                PlatformService.hideLoading();
                await PlatformService.showModalTips('图片保存失败！');
                }
            }catch{
                PlatformService.hideLoading();
                await PlatformService.showModalTips('图片保存失败！');
            }
            
        },

        /**
         * 关闭分享海报
         */
        bindCloseClick(){
            this.triggerEvent('tapclose');
        },

        /**
         * 多行文本绘制
         * @param {*} ctx 
         * @param {*} str 
         * @param {*} dx 初始x坐标
         * @param {*} dy 初始y坐标
         * @param {*} maxWidth 最大宽度
         */
        drawText: function(ctx, str, dx, dy, maxWidth, fontsize=16) {
            let lineWidth = 0;
            let lastSubStrIndex = 0;                //每行文本起始index
            for (let i = 0; i < str.length; i++) {
                lineWidth += ctx.measureText(str[i]).width;
                if (lineWidth > maxWidth) {
                    ctx.fillText(str.substring(lastSubStrIndex, i), dx, dy); //绘制满一行文本
                    dy += fontsize;
                    lineWidth = 0;
                    lastSubStrIndex = i;
                }
                if (i == str.length - 1) {            //最后一行不满一行文本绘制
                    ctx.fillText(str.substring(lastSubStrIndex, i + 1), dx, dy);
                }
            }
        },

    },
});