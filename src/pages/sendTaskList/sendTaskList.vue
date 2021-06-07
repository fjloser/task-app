<template>
	<view class="container">
		<view class="select-type">
			<view class="type-list" v-for="(ele, index) in orderType" :key="index" :class="{active:index == tabIndex}" @click="changeTab(index)">
				{{ele}}
			</view>
		</view>
		<view class="task-box">
			<sendTask :tabIndex="tabIndex"></sendTask>
		</view>
	</view>
</template>

<script>
	import sendTask from '@/components/sendTask/sendTask.vue'
	export default {
		components:{
			sendTask
		},
		onLoad:function(options){
		},
		mounted: function(){
			console.log(this.tabIndex)
		},
		data() {
			return {
				tabIndex: 0,
				orderType: ['全部', '待付款', '进行中', '待评价', '已结束']
			}
		},
		methods: {
			changeTab(i){
				this.tabIndex = i
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './send.scss'
</style>
