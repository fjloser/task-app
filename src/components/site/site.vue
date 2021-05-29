<template>
	<view class="content">
		<pickerAddress @change="change">{{txt}}</pickerAddress>
	</view>
</template>

<script>
	import pickerAddress from '../pick/pick.vue'
	export default {
		components: {
			pickerAddress
		},
		data() {
			return {
				txt: '全国'
			}
		},
		onLoad() {

		},
		methods: {
			change(data) {
				this.txt = data.data.join('')
				console.log(data.data.join(''))
			}
		}
	}
</script>
<style lang="scss" scoped>
	
</style>