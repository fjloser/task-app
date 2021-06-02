const BASE_URL = 'http://housekeapi.com/'
let ajaxTimes = 0
export const ajax = (options) => {
	ajaxTimes++
	uni.showLoading({
		title: '加载中',
		mask: true
	})
	return new Promise((resolve, reject) => {
		uni.request({
					url:BASE_URL+options.url,
					method: options.method || 'POST',
					data: options.data || {},
					// header,
					success: (res)=>{
						resolve(res)
					},
					fail: (err)=>{
						reject(err)
					},
					complete:()=>{
						ajaxTimes--;
						if(ajaxTimes===0){
					        uni.hideLoading();
					    }
					}
				})
	})
	
	// return res
	// console.log(options.header)
	// let header = {...options.header}
	/*登录标志*/
	// if(options.url != 'login'){
	// 	let token = uni.getStorageInfoSync('token')
	// }
}