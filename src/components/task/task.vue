<template>
	<view class="container">
		<view class="task-list" v-for="(ele, index) in taskList" :key="index">
			<view class="task-top">
				<view class="task-id">
					<text>订单号:</text>
					<text>5585787489</text>
				</view>
				<view class="task-staus">
					{{taskStatus}}
				</view>
			</view>
			<view class="task-name">
				{{ele.content.title}}
			</view>
			<view class="price">
				<text>总金额:</text>
				<text>{{parseFloat(ele.money/100).toFixed(2)}}</text>
			</view>
			<view class="task-bottom">
				<view class="change-status" v-if="tabIndex == 1">
					开始
				</view>
				<view class="change-status" v-if="tabIndex == 2">
					完成
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["tabIndex"],
		onLoad: (options) => {
			console.log(options)
		},
		watch: {
			tabIndex: function(val){
				this.tabIndex = val
				if(this.tabIndex == 1){
					this.taskStatus = '未开始'
				}else if(this.tabIndex == 2){
					this.taskStatus = '进行中'
				}else{
					this.taskStatus = '已完成'
				}
			}
		},
		data() {
			return {
				taskStatus: '',
				taskList: [],
			}
		},
		mounted: function(){
			this.getOrder()
		},
		methods: {
			async getOrder(){
				let {data: res} = await this.$ajax({
					url: 'api/workList',
					data: {
						token: uni.getStorageSync('token'),
						user_type: 2,
						work: 1
					}
				})
				for(let i = 0; i < res.data.length; i++){
					res.data[i].content = JSON.parse(res.data[i].content)
				}
				this.taskList = res.data
				console.log(this.taskList)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './task.scss'

</style>
