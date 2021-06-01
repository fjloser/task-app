<template>
	<view class="container">
		<view class="task-mes">
			<view class="swiper-box">
				<swiper class="swiper" :indicator-dots="true" indicator-active-color="gray" :autoplay="false" :interval="1500"
					:duration="500" :circular='true'>
					<swiper-item>
						<view class="swiper-item uni-bg-red">A</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">B</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">C</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="mes-box">
				<view class="task-name">
					logo谁设计
				</view>
				<view class="task-price">
					<text>￥</text>8888887
				</view>
				<view class="add-mes">
					<view class="add-mes-list1 add-mes-list">
						<view class="num">
							2
						</view>
						<view class="name">
							开始时间
						</view>
					</view>
					<view class="add-mes-list2 add-mes-list">
						<view class="num">
							5
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
							tttt
						</view>
					</view>
					<view class="add-mes-list4 add-mes-list">
						<view class="num">
							而二人
						</view>
						<view class="name">
							哈弗uu
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
					成都
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
					十分满意
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
@import './taskDetail.scss';
</style>
