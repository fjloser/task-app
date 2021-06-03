<template>
	<view class="container">
		<view class="task-mes">
			<view class="swiper-box">
				<swiper class="swiper" :indicator-dots="true" indicator-active-color="gray" :autoplay="false" :interval="1500"
					:duration="500" :circular='true'>
					<swiper-item>
						<view class="swiper-item uni-bg-red"><image src="../../static/logo.png" mode="" style="width: 100%; height: 100%;"></image></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green"><image src="../../static/logo.png" mode="" style="width: 100%; height: 100%;"></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue"><image src="../../static/logo.png" mode="" style="width: 100%; height: 100%;"></view>
					</swiper-item>
				</swiper>
			</view>
			<view class="mes-box">
				<view class="task-name">
					{{task.content.title}}
				</view>
				<view class="task-price">
					<text>￥</text>{{parseFloat(task.money/100).toFixed(2)}}
				</view>
				<view class="add-mes">
					<view class="add-mes-list1 add-mes-list">
						<view class="num">
							{{startTime}}
						</view>
						<view class="name">
							开始时间
						</view>
					</view>
					<view class="add-mes-list2 add-mes-list">
						<view class="num">
							{{endTime}}
						</view>
						<view class="name">
							结束时间
						</view>
					</view>
					<view class="add-mes-list3 add-mes-list">
						<view class="num">
							555
						</view>
						<view class="name">
							评分
						</view>
					</view>
					<view class="add-mes-list4 add-mes-list">
						<view class="num">
							2
						</view>
						<view class="name">
							任务人数
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="user-info">
			<view class="img-box">
				<image src="../../static/imgs/u=708482407,3295795161&fm=26&gp=0.jpg" mode=""></image>
			</view>
			<view class="info-box">
				<view class="user-name">
					樱花岁月
				</view>
				<view class="task-level">
					任务难度: 中等
				</view>
				<view class="site">
					{{task.address}}
				</view>
			</view>
		</view>
		<view class="comment">
			<view class="title">
				客户评价
			</view>
			<view class="comment-list">
				<view class="user-info-box">
					<view class="img-box">
						<image src="../../static/imgs/u=708482407,3295795161&fm=26&gp=0.jpg" mode=""></image>
					</view>
					<view class="user-name">
						8574777
					</view>
				</view>
				<view class="user-comment">
					<view>
						十分满意
					</view>
					<view>
						<text class="iconfont icon-add"></text>
						<text class="iconfont icon-add"></text>
						<text class="iconfont icon-add"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="task-detail">
			<view class="title">
				服务详情
			</view>
			<view class="ql-container">
				<rich-text :nodes="task.content.richText"></rich-text>
			</view>
		</view>
		<view class="get-btn">
			<view class="colect">
				<text class="iconfont icon-add"></text>
				<view class="title">
					收藏
				</view>
			</view>
			<view class="seek">
				<text class="iconfont icon-dianhuazixun"></text>
				<view class="title">
					电话咨询
				</view>
			</view>
			<view class="btn-box">
				<view class="seek-btn">
					在线咨询
				</view>
				<view class="recive-btn" @click="addTask">
					接受任务
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				task: '',
				startTime: '',
				endTime: '',
			}
		},
		onLoad(options){
			
			this.task = JSON.parse(options.task)
			let time = new Date(parseInt(this.task.start_time)*1000)
			let time1 = new Date(parseInt(this.task.end_time)*1000)
			this.startTime = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
			this.endTime = time1.getFullYear() + '-' + (time1.getMonth() + 1) + '-' + time1.getDate()
		},
		methods: {
			async addTask(){
				const {data: res} = await this.$ajax({
					url: 'api/getTask',
					data: {
						token: uni.getStorageSync('token'),
						work_id: this.task.work_id
					}
				})
				console.log(res)
				if(res.code != 2000) return uni.showToast({
						title:'任务已被接取',
						duration: 1500,
						icon:'none'
					});
				uni.showToast({
						title:'接取成功',
						duration: 1500,
						icon:'none'
					});
				
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './taskDetail.scss';
</style>
