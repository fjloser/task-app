<template>
	<view class="container">
		<view class="logo">
			<image  src="/static/logo.png" style="width: 100%; height: 100%;"></image>
		</view>
		<view class="form">
			<view class="userName">
				<text>账号</text><input type="text" v-model="userName" placeholder="请使用手机号注册 "/>
			</view>
			<view class="password">
				<text>密码</text><input type="password" v-model="password" placeholder="请输入密码"/>
			</view>
		</view>
		<view class="submit" @click="register">
			注册
		</view>
		<view class="other">
			<text>已有账号?</text>
			<text @click="navToLogin">去登录</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				userName: '',
				password: '',
			}
		},
		methods: {
			navToLogin(){
				wx.redirectTo({
					url: '../login/login'
				})
			},
			register(){
				async function request (){
					 const {data: res} = await this.$ajax({
						 url: 'api/goodList',
						 	data: {
						 		page: 1,
						 		size: 5,
						 		province: '四川',
						 		city: '成都',
						 		area: '玉林',
						 		work_type: '1'
						 	}
					 })
					if(res.code != 200) return uni.showToast({
							title:'注册失败',
							duration: 1500,
							icon:'none'
						});
					uni.showToast({
							title:'注册成功',
							duration: 1500,
							icon:'none'
						});
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.container{
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
</style>
