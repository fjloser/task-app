<template>
	<view class="container">
		<view class="search">
			<view class="search-wrapper">
				<icon type="search" size="12"></icon>
				<input type="text" v-model="searchStr" placeholder="搜素"/>
			</view>
		</view>
		<!-- <Site style="margin-top: 100px;"></Site> -->
		<view class="content">
			<view class="condition-box">
				<view class="type-list" v-for="">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Site from './data.js'
	export default {
		data() {
			return {
				searchStr: '',
				condition: [
					{type: '服务', select_condition: [{type_name: '综合', selectArr: ['综合', '评价', '就觉得']}, {type_name: '小量', selectArr: []}]},
					{type: '案例', select_condition: [{type_name: '热销', selectArr: ['狗', '鸡', '呀']}, {type_name: '小量', selectArr: []}]},
					{type: '商铺', select_condition: [{type_name: '综合', selectArr: []}, {type_name: '成交', selectArr: []}, {type_name: '好评率', selectArr: []}]}
				]
			}
		},
		methods: {
			
		}
	}
</script>


<style lang="scss" scoped>
	.container{
		position: relative;
		padding: 0 30rpx;
		background-color: #fafafa;
		.search{
			position: fixed;
			box-sizing: border-box;
			width: 100%;
			left: 0;
			top: 54px;
			z-index: 10;
			padding: 0 30rpx;
			// margin-top: 20rpx;
			.search-wrapper{
				position: relative;
				padding: 10rpx 0;
				background-color: rgba(0, 0, 0, .1);
				border-radius: 10rpx;
				icon{
					position: absolute;
					left: 20rpx;
					top: 50%;
					transform: translateY(-50%);
				}
				input{
					// height: 30px;
					padding-left: 60rpx;
					font-size: 12px;
				}
			}
		}
	}

</style>
