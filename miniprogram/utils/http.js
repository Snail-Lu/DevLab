/**
 * 云函数async封装
 * @param {string} functionName 云函数名称
 * @param {object} data 云函数参数
 * @return {Promise} 
 */
export const cloudRequest = (functionName, data) => {
    return new Promise((resolve, reject)=>{
        wx.cloud.callFunction({
            // 要调用的云函数名称
            name: functionName,
            // 传递给云函数的参数
            data: data
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}