<template>
	<view class="content">
		<view class="logo">
			<image  src="/static/logo.png" style="width: 100%; height: 100%;"></image>
		</view>
		<view class="form">
			<view class="userName">
				<text>账号</text><input type="text" v-model="userName" placeholder="请输入账号 "/>
			</view>
			<view class="password">
				<text>密码</text><input type="password" v-model="password" placeholder="请输入密码"/>
			</view>
		</view>
		<view class="submit" @click="login">
			登录
		</view>
		<view class="other">
			<text>没有账号?</text>
			<text @click="navToregister">去注册</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '',
				password: '',
			}
		},
		onLoad() {
			// const {data: res} = this.$Ajax({
			// 	url: 'api/goodList',
			// 	data: {
			// 		page: 1,
			// 		size: 5,
			// 		province: '四川',
			// 		city: '成都',
			// 		area: '玉林',
			// 		work_type: '1'
			// 	}
			// })
			// console.log(res)
		},
		methods: {
			navToregister(){
				wx.redirectTo({
					url: '../register/register'
				})
			},
			login(){
				console.log(2)
				//  const {data: res} = await this.$ajax({
				// 	 url: 'api/goodList',
				// 	 	data: {
				// 	 		page: 1,
				// 	 		size: 5,
				// 	 		province: '四川',
				// 	 		city: '成都',
				// 	 		area: '玉林',
				// 	 		work_type: '1'
				// 	 	}
				//  })
				// if(res.code != 200) return uni.showToast({
				// 		title:'用户名或密码不正确',
				// 		duration: 1500,
				// 		icon:'none'
				// 	});
				// uni.setStorageSync('token',res.data.token)
					// 登录成功跳转到首页
					uni.switchTab({
						url: '../home/home'
					})
			},
		}
	}
</script>


<style lang="scss" scoped>
	.content{
		$icon-height: 100rpx;
		.logo{
			height: $icon-height;
			width: $icon-height;
			border-radius: 50%;
			margin: $icon-height auto;
			overflow: hidden;
		}
		.title {
			font-size: 36rpx;
			color: #8f8f94;
		}
	}
	.form{
		.userName{
			display: flex;
			justify-content: center;
			align-items: flex-end;
			font-size: 30rpx;
			margin-bottom: 100rpx;
			text{
				display: inline-block;
				width: 100rpx;
			}
			input{
				font-size: 26rpx;
				height: 60rpx;
				border-bottom: 1px solid rgba(0, 0, 0, .1);
			}
		}
		.password{
			display: flex;
			justify-content: center;
			align-items: flex-end;
			font-size: 30rpx;
			margin-bottom: 100rpx;
			text{
				display: inline-block;
				width: 100rpx;
			}
			input{
				font-size: 26rpx;
				height: 60rpx;
				border-bottom: 1px solid rgba(0, 0, 0, .1);
			}
		}
	}
	.submit{
		width: 100px;
		padding: 10px;
		margin: 0 auto;
		background-color: green;
		border-radius: 20px;
		color: white;
		// letter-spacing: 10px;
		font-size: 30rpx;
		text-align: center;
	}
	.other{
		margin-top: 10px;
		text-align: center;
		text{
			font-size: 24rpx;
		}
		text:nth-child(2){
			color: orange;
			margin-left: 20px;
			text-decoration: underline;
		}
	}
	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	} */
</style>
