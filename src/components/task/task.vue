<template>
	<view class="container">
		<view class="task-list">
			<view class="task-top">
				<view class="task-id">
					<text>订单号:</text>
					<text></text>
				</view>
				<view class="task-staus">
					{{taskStatus}}
				</view>
			</view>
			<view class="task-name">
				wo
			</view>
			<view class="price">
				<text>总金额:</text>
				<text>price</text>
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
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import './task.scss'

</style>
