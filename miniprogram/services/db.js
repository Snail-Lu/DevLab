const db = wx.cloud.database()

export default class DatabaseService {
    static async query (collection, params={}) {
        // 查询当前用户collection集合中的数据
        let res = await db.collection(collection).where(params).get()
        return res.data;
    }
}