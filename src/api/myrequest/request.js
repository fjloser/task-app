const BASE_URL = ''
let ajaxTimes = 0
export const ajax = (options) => {
	let header = {...options.header}
	/*登录标志*/
	if(options.url != 'login'){
		header['client-identity'] = uni.getStorageInfoSync('session_id')
	}
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
					header,
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
}