<template>
	<view class="container">
		<view class="top">
			<view class="title">
				你想干嘛
			</view>
			<view class="submit" @click="submit">
				提交
			</view>
		</view>
		<view class="need-type">
			<view class="type-title">
				需求类型
			</view>
			<view class="content">
				LOGO
			</view>
		</view>
		<view class="need-title">
			<view class="type-title">
				需求标题
			</view>
			<view class="content">
				<input type="text" placeholder="请输入标题" v-model="title" />
			</view>
		</view>
		<view class="need-des">
			<view class="type-title">
				需求描述
			</view>
			<view class="content">
				<textarea placeholder="请输入" v-model="des" />
			</view>
		</view>
		<view class="need-time">
			<view class="start-time">
				<uni-calendar ref="calendar" :insert="false" @confirm="confirm" :showMonth="true"
					:startDate="startTime">
				</uni-calendar>
				<text>开始时间 :</text><text class="show-time">{{startTime}}</text>
				<text class="iconfont icon-rili" @click="open"></text>
			</view>
			<view class="end-time">
				<uni-calendar ref="calendar1" :insert="false" @confirm="confirm1" :showMonth="true"
					:startDate="startTime">
				</uni-calendar>
				<text>结束时间 :</text><text class="show-time">{{endTime}}</text>
				<text class="iconfont icon-rili" @click="open1"></text>
			</view>
		</view>
		<view class="edite" @click="navToEdite">
			<view class="title-btn">
				点击编辑详情
			</view>
			<view class="ql-container">
				<rich-text class="ql-editor" :nodes="html"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				html: '',
				title: '',
				des: '',
				startTime: '',
				endTime: '请选择',
				richText: ''
			}
		},
		onLoad(options) {
			console.log(options)
			options.html ? this.html = options.html : this.html = ''
		},
		computed: {
			...mapState(['titlex', 'desx', 'startTimex', 'endTimex'])
		},
		mounted: function() {
			console.log(this.titlex)
			if (this.titlex) this.title = this.titlex;
			if (this.desx) this.des = this.desx;
			if (this.startTimex) this.startTime = this.startTimex;
			if (this.endTimex) this.endTime = this.endTimex;
			this.startTime = this.getTime()
		},
		onBackPress(e){
			// console.log(e)
			uni.switchTab({
				url:'../person/person'
			})
			return true
		},
		methods: {
			...mapMutations({
				changeTitle: 'changeTitle'
			}),
			navToEdite() {
				this.changeTitle({
					title: this.title,
					des: this.des,
					startTime: this.startTime,
					endTime: this.endTime,
				})
				if (this.html) {
					uni.navigateTo({
						url: '../edite/edite?html=' + this.html
					})
				} else {
					uni.navigateTo({
						url: '../edite/edite'
					})
				}
			},
			open() {
				this.$refs.calendar.open();
			},
			open1() {
				this.$refs.calendar1.open()
			},
			confirm(e) {
				// console.log(e)
				this.startTime = e.fulldate
			},
			confirm1(e) {
				// console.log(e)
				console.log('end')
				this.endTime = e.fulldate
			},
			getTime() {
				let date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth() + 1
				let day = date.getDate()
				return year + '-' + month + '-' + day
				// let year
			},
			async submit() {
				let content = {}
				content.title = this.title
				content.richText = this.html
				var arr1 = this.startTime.split('-')
				var arr2 = this.endTime.split('-')
				var startTime = new Date(arr1[0], arr1[1] - 1, arr1[2]).getTime() / 1000
				var endTime = new Date(arr2[0], arr2[1] - 1, arr2[2]).getTime() / 1000
				const {
					data: res
				} = await this.$ajax({
					url: 'api/addTask',
					data: {
						token: uni.getStorageSync('token'),
						start_time: startTime + '',
						end_time: endTime + '',
						remark: this.des,
						content: JSON.stringify(content),
						phone: '110120119',
						address: '九龙坡达子街',
						province: '51',
						city: '01',
						area: '07',
						money: '2000',
						work_type: 20
					}
				})
				console.log(res)
				if(res.code == 3000) return uni.showToast({
					title:'请登录',
					duration: 1500,
					icon:'none'
				})
				if(res.code == 3002) return uni.showToast({
					title:'登录失效，请重新登录',
					duration: 1500,
					icon:'none'
				})
				this.changeTitle({
					title: this.title,
					des: this.des,
					startTime: this.startTime,
					endTime: this.endTime,
				})
				console.log(2)
				if (res.code != 2000) return uni.showToast({
					title: '提交失败 ',
					duration: 1500,
					icon: 'none'
				});
				this.html = ''
				this.title = ''
				this.des = ''
				this.startTime = ''
				this.endTime = '请选择'
				uni.showToast({
					title: '提交成功',
					duration: 1500,
					icon: 'none'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import './sendTask.scss';

	.ql-container {
		overflow: visible !important;
	}
</style>
