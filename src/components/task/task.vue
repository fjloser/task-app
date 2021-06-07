<template>
	<view class="container">
		<view class="task-list" v-for="(ele, index) in renderList" :key="index">
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
				<view class="change-status" v-if="tabIndex == 1" @click="changeState(index)">
					开始
				</view>
				<view class="change-status" v-if="tabIndex == 2" @click="changeState(index)">
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
				console.log(val)
				console.log(this.tabIndex, 'eeuueu')
				this.tabIndex = val
				this.renderList = []
				if(this.tabIndex == 1){
					this.taskStatus = '未开始'
				}else if(this.tabIndex == 2){
					this.taskStatus = '进行中'
				}else{
					this.taskStatus = '已完成'
				}
				console.log(this.taskList, '切换')
				for(let i = 0; i < this.taskList.length; i++){
					console.log(333)
					if(this.taskList[i].state == (+this.tabIndex + 3) && this.tabIndex == 1){
						console.log('weikaishi')
						this.renderList.push(this.taskList[i])
					}else if(this.taskList[i].state == (+this.tabIndex + 5) && this.tabIndex == 2){
						this.renderList.push(this.taskList[i])
						console.log('jinxing')
					}else if(this.taskList[i].state == (+this.tabIndex + 4) && this.tabIndex == 4){
						this.renderList.push(this.taskList[i])
						console.log('jiesu')
					}
				}
				console.log(this.renderList)
			}
		},
		data() {
			return {
				taskStatus: '',
				taskList: [],
				renderList: []
			}
		},
		mounted: function(){
			this.getOrder()
			// console.log(this.renderList)
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
				for(let i = 0; i < res.data.length; i++){
					res.data[i].content = JSON.parse(res.data[i].content)
				}
				if(res.code != 2000) return uni.showToast({
					title:'网络错误',
					duration: 1000,
					icon:'none'
				});
				this.taskList = res.data
				console.log(this.taskList)
				for(let i = 0; i < this.taskList.length; i++){
					if(this.taskList[i].state == (+this.tabIndex + 3) && this.tabIndex == 1){
						this.renderList.push(this.taskList[i])
					}else if(this.taskList[i].state == (+this.tabIndex + 5) && this.tabIndex == 2){
						this.renderList.push(this.taskList[i])
					}else if(this.taskList[i].state == (+this.tabIndex + 4) && this.tabIndex == 4){
						this.renderList.push(this.taskList[i])
					}
				}
			},
			async changeState(index){
				if(this.tabIndex == 1){
					const {data: change} = await this.$ajax({
					    url: 'api/workModify',
						data: {
							token: uni.getStorageSync('token'),
							work: '2',
							work_id: this.renderList[index].work_id,
							state: '7'
						}
					})
					console.log(change,'change')
					if(change.code == 3000) return uni.showToast({
						title:'请登录',
						duration: 1500,
						icon:'none'
					})
					if(change.code == 3002) return uni.showToast({
						title:'登录失效，请重新登录',
						duration: 1500,
						icon:'none'
					})
					if(change.code != 2000) return
					const {data: res} = await this.$ajax({
						url: 'api/workList',
						data: {
							token: uni.getStorageSync('token'),
							user_type: 2,
							work: 1
						}
					})
					console.log(res)
					if(res.code != 2000) return uni.showToast({
						title:'网络错误',
						duration: 1000,
						icon:'none'
					});
					for(let i = 0; i < res.data.length; i++){
						res.data[i].content = JSON.parse(res.data[i].content)
					}
					this.taskList = res.data
					this.renderList = []
					for(let i = 0; i < this.taskList.length; i++){
						console.log(333)
						if(this.taskList[i].state == (+this.tabIndex + 3) && this.tabIndex == 1){
							console.log('weikaishi')
							this.renderList.push(this.taskList[i])
						}else if(this.taskList[i].state == (+this.tabIndex + 5) && this.tabIndex == 2){
							this.renderList.push(this.taskList[i])
							console.log('jinxing')
						}else if(this.taskList[i].state == (+this.tabIndex + 4) && this.tabIndex == 4){
							this.renderList.push(this.taskList[i])
							console.log('jiesu')
						}
					}
				}else if(this.tabIndex == 2){
					const {data: change} = await this.$ajax({
						url: 'api/workModify',
						data: {
							token: uni.getStorageSync('token'),
							work: '2',
							work_id: this.renderList[index].work_id,
							state: '8'
						}
					})
					if(change.code == 3000) return uni.showToast({
						title:'请登录',
						duration: 1500,
						icon:'none'
					})
					if(change.code == 3002) return uni.showToast({
						title:'登录失效，请重新登录',
						duration: 1500,
						icon:'none'
					})
					if(change.code != 2000) return
					const {data: res} = await this.$ajax({
						url: 'api/workList',
						data: {
							token: uni.getStorageSync('token'),
							user_type: 2,
							work: 1
						}
					})
					console.log(res)
					if(res.code != 2000) return uni.showToast({
						title:'网络错误',
						duration: 1000,
						icon:'none'
					});
					for(let i = 0; i < res.data.length; i++){
						res.data[i].content = JSON.parse(res.data[i].content)
					}
					this.taskList = res.data
					this.renderList = []
					for(let i = 0; i < this.taskList.length; i++){
						if(this.taskList[i].state == (+this.tabIndex + 3) && this.tabIndex == 1){
							this.renderList.push(this.taskList[i])
						}else if(this.taskList[i].state == (+this.tabIndex + 5) && this.tabIndex == 2){
							this.renderList.push(this.taskList[i])
						}else if(this.taskList[i].state == (+this.tabIndex + 4) && this.tabIndex == 4){
							this.renderList.push(this.taskList[i])
						}
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './task.scss'

</style>
