<template>
	<view class="container">
		<view class="login-box">
			<view class="user-mes-box">
				<view class="img-box">
					<image src="../../static/imgs/u=708482407,3295795161&fm=26&gp=0.jpg" mode="" ></image>
				</view>
				<view class="userName">
					888877
				</view>
			</view>
			<view class="iconfont-box">
				<text class="iconfont icon-xiaoxi"></text>
				<text class="iconfont icon-shezhi"></text>
			</view>
		</view>
		<view class="content-box">
			<view class="task-box">
				<view class="title">
					我的订单
				</view>
				<view class="process">
					<view class="icon-box" @click="navToOrder(1)">
						<text class="iconfont icon-daifukuan"></text>
						<view class="title">
						待付款
						</view>
					</view>
					<view class="icon-box" @click="navToOrder(2)">
						<text class="iconfont icon-jinhangzhong"></text>
						<view class="title">
							进行中
						</view>
					</view>
					<view class="icon-box" @click="navToOrder(3)">
						<text class="iconfont icon-daipingjia"></text>
						<view class="title">
							待评价
						</view>
					</view>
					<view class="icon-box" @click="navToOrder(4)">
						<text class="iconfont icon-poll_finished"></text>
						<view class="title">
							已结束
						</view>
					</view>
				</view>
				<!-- <Task></Task> -->
			</view>
			<view class="setting-box">
				<view class="title">
					常用工具
				</view>
				<view class="setting">
					<view class="icon-box" v-for="(ele,index) in setting" :key="index" @click="navToSendTask(index)">
						<text :class="ele.icon"></text>
						<view class="title">
							{{ele.name}}
						</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import Task from '@/components/task/task'
	export default {
		// components:{
		// 	Task
		// },
		data() {
			return {
				setting: [{icon: 'iconfont icon-woderenwu', name: '我的订单'},
				{icon: 'iconfont icon-faburenwu', name: '发布任务'},
				{icon: 'iconfont icon-kefu', name: '官方客服'},
				{icon: 'iconfont icon-yijian', name: '意见反馈'},
				{icon: 'iconfont icon-shoucang', name: '我的收藏'},
				{icon: 'iconfont icon-trademark-circle-fil', name: '商标成功率'},
				{icon: 'iconfont icon-HNTE', name: '高企测评'},
				{icon: 'iconfont icon-banben', name: '版本免费查'},
				{icon: 'iconfont icon-gongjuxiang', name: '代账工具'},
				{icon: 'iconfont icon-daiheming', name: '免费核名'},
				{icon: 'iconfont icon-zhuce', name: '注册公司'},
				{icon: 'iconfont icon-dianzihetong', name: '电子合同'}
				]
			}
		},
		methods: {
			navToOrder(i){
				uni.navigateTo({
					url: '../order/order?index=' + i
				})
			},
			navToSendTask(i){
				if(i == 1){
					uni.navigateTo({
						url: '../sendTask/sendTask'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './person.scss'
</style>
