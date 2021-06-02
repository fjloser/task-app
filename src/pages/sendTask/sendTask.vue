<template>
	<view class="container">
		<view class="top">
			<view class="title">
				你想干嘛
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
				<input type="text" value="" placeholder="请输入标题"/>
			</view>
		</view>
		<view class="need-des">
			<view class="type-title">
				需求描述
			</view>
			<view class="content">
				<textarea value="" placeholder="请输入" />
			</view>
		</view>
		<view class="edite" @click="navToEdite">
			点击编辑详情
			<view class="ql-container">
			    <rich-text class="ql-editor" :nodes="html"></rich-text>  
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				html: '',
			}
		},
		onLoad(options) {
			console.log(options)
			options.html ? this.html = options.html : this.html = ''
		},
		methods: {
			navToEdite(){
				if(this.html){
					uni.navigateTo({
						url: '../edite/edite?html=' + this.html
					})
				}else{
					uni.navigateTo({
						url: '../edite/edite'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './sendTask.scss';
.ql-container{
	overflow: visible!important;
}
</style>
