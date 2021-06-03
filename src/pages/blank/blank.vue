<template>
	<view>
		
	</view>
</template>

<script>
	import {mapState, mapMutations} from "vuex"
	export default {
		data() {
			return {
				
			}
		},
		mounted: function(){
			this.changeTitle({
				title: '',
				des: '',
				startTime: '',
				endTime: '',
			})
			uni.redirectTo({
				url: '../sendTask/sendTask'
			})
		},
		methods: {
			...mapMutations({
				changeTitle: 'changeTitle'
			})
		}
	}
</script>

<style>

</style>
