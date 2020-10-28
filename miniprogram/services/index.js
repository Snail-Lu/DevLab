import { cloudRequest } from '../utils/http';
const app = getApp()

export default class CommonService {
    // 获取用户openId
    static async getOpenid() {
        if(app.globalData.openid){
            return app.globalData.openid
        }

        let res = await cloudRequest('login', {});
        let openid = res.result.openid;
        if(openid){
            app.globalData.openid = openid;
            return openid;
        }
    }
}