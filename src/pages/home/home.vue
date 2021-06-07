<template>
	<view class="container">
		<view class="search">
			<view class="search-wrapper">
				<icon type="search" size="12"></icon>
				<input type="text" v-model="searchStr" placeholder="搜素"/>
			</view>
		</view>
		<view class="service">
			<view class="service-list" v-for="(ele, index) in service" :key="index" :class="{active:index == serviceIndex}" @click="changeService(index)">
				{{ele}}
			</view>
		</view>
		<liFilter @change="change" @select="select" :datalist="datalist" :height="height" :alertFlag="alertFlag" @changeAlertFlag="changeAlertFlag"></liFilter>
		<view class="content">
			<view class="condition-box">
				<view class="type-list" v-for="(ele, index) in tasks" :key="index" @click="navTotaskDetail(ele)">
					<view class="img-box">
						<image src="../../static/imgs/u=708482407,3295795161&fm=26&gp=0.jpg" mode=""></image>
					</view>
					<view class="task-info">
						<view class="task-name">
							{{ele.content ? ele.content.title: ''}}
						</view>
						<view class="tag">
							<text>三套方案选择</text>
							<text>一万个抉择</text>
							<text>到死不给钱</text>
						</view>
						<view class="price-box">
							<text>￥</text>
							{{parseFloat(ele.money/100).toFixed(2)}}元
							<text class="comment-score">销量: 1255</text>
							<text class="comment-score">评分: 3.4分</text>
						</view>
						<view class="task-des">
							{{ele.remark}}
						</view>
						<view class="other-mes">
							<view class="site">
								{{ele.address}}
							</view>
							<view class="detail">
								查看详情
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="alert-box" v-if="alertFlag">
			<scroll-view class="alert-select" scroll-y="true">
				<view class="select-type" v-for="(ele, index) in selectArr" :key='index'>
					<view class="type-name">
						{{ele.type}}
					</view>
					<view class="select-box">
						<view class="select-list" v-for="(ele, index1) in ele.arr" :key="index1" 
						:class="{active:index1 == select1Index[index]}" @click="changeSelect1(index, index1)">
							{{ele}}
						</view>
					</view>
				</view>
				<view class="price-box">
					<view class="type-name">
						价格区间(元)
					</view>
					<view class="price-content">
						<input type="text" value="" placeholder="最低价"/>
						<text>--</text>
						<input type="text" value="" placeholder="最高价"/>
					</view>
				</view>
				<view class="ensured-box">
					<view class="type-name">
						服务保障
					</view>
					<view class="ensured">
						<view class="ensured-list" v-for="(ele, index) in ensured" :key="index" :class="{active:index == select2Index}" @click="changeSelect2(index)">
							{{ele}}
						</view>
					</view>
				</view>
				<view class="authentication-box">
					<view class="type-name">
						商家身份(所有商家均经过实名认证)
					</view>
					<view class="authentication">
						<view class="authentication-list" v-for="(ele, index) in authentication" :key="index" :class="{active:index == select3Index}" @click="changeSelect3(index)">
							{{ele}}
						</view>
					</view>
				</view>
				<view class="btn-box">
					<view class="cancel-btn" @click="changeAlertFlag">
						重置
					</view>
					<view class="sure-btn" @click="changeAlertFlag">
						确认
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import liFilter from '@/components/Li-Filter/Li-Filter'
	// import Site from './data.js'
	export default {
		components: {
			liFilter
		},  
		data() {
			return {
				page: 1,
				alertFlag: false,
				serviceIndex: 0,
				select1Index: [],
				select2Index: undefined,
				select3Index: 0,
				datalist: {},
				testList: {},
				height: 0.6,
				searchStr: '',
				service: ['服务', '案例', '店铺'],
				selectArr: [{type: '行业', arr: ['11', '22', '98', '88', '44', '11', '22', '98', '88', '11', '22', '98', '88', '11', '22', '98', '88', '11', '22', '98', '88']},
				{type: '主题', arr: ['11', '22', '98', '88', '44', '11', '22', '98', '88', '11', '22', '98', '88', '11', '22', '98', '88', '11', '22', '98', '88']}],
				ensured: ['888', '888', '999', '9055', '888', '888', '999', '9055', '888', '888', '999', '9055', '888', '888', '999', '9055',],
				authentication: ['22', '44', '344'],
				tasks: [
					// {img: '../../static/imgs/u=708482407,3295795161&fm=26&gp=0.jpg', name: 'logo设计', price: 299, mes: '好好好', site: '成都'},
					// {img: '../../static/imgs/u=708482407,3295795161&fm=26&gp=0.jpg', name: 'logo设计', price: 299, mes: '好好好', site: '成都'},
					// {img: '../../static/imgs/u=708482407,3295795161&fm=26&gp=0.jpg', name: 'logo设计', price: 299, mes: '好好好', site: '成都'},
					// {img: '../../static/imgs/u=708482407,3295795161&fm=26&gp=0.jpg', name: 'logo设计', price: 299, mes: '好好好', site: '成都'},
					// {img: '../../static/imgs/u=708482407,3295795161&fm=26&gp=0.jpg', name: 'logo设计', price: 299, mes: '好好好', site: '成都'}
				]
			}
		},
		onLoad(){
			let tempdata = {
				filterType: 1,
				data: []
			};
			let normalItem = {
				title: '综合排序', //排序头的名称
				value: 'a',
				type: 1, //类型，0：没有下拉选项，1：单项下拉列表，2：多项列表，如地区选择
				data: [
					{
						value: 1,
						text: '综合排序'
					},
					{
						value: 2,
						text: '只看商家'
					},
					{
						value: 3,
						text: '只看产品'
					}
				]
			};
			
			let sigleItem = {
				title: '销量', //排序头的名称
				value: 'b',
				type: 0 //类型，0：没有下拉选项，1：单项下拉列表，2：多项列表，如地区选择
			};
			
			let areaData = require('../../static/area.json');
			let typeData = require('../../static/type.json');
			
			let AreaItem = {
				title: '区域', //排序头的名称
				value: 'c',
				type: 2, //类型，0：没有下拉选项，1：单项下拉列表，2：多项列表，如地区选择
				data: areaData
			};
			tempdata.data.push(AreaItem);
			tempdata.data.push(normalItem);
			tempdata.data.push(sigleItem);
			this.datalist = tempdata;
		},
		mounted: function(){
			this.request()
		},
		methods: {
			async request(){
				console.log(1)
				const {data: res} = await this.$ajax({
					url: 'api/TaskList',
					data: {
						page: this.page,
						size: '10',
						province: '51',
						city: '01',
						area: '07',
						work_type: 20
					}
				})
				console.log(res)
				for(let i = 0; i < res.data.data.length; i++){
					res.data.data[i].content = JSON.parse(res.data.data[i].content)
				}
				this.tasks = res.data.data
				console.log(this.tasks)
			},
			change(e) {
				// console.log('----------change----------');
				// console.log(e);
			},
			select(e) {
				// console.log('----------select----------');
				// console.log(e);
			},
			changeService(i){
				this.serviceIndex = i
			},
			changeSelect1(i, j){
				this.$set(this.select1Index, i, j)
			},
			changeSelect2(i){
				this.select2Index = i
			},
			changeSelect3(i){
				this.select3Index = i
			},
			changeAlertFlag(){
				this.alertFlag = !this.alertFlag
			},
			navTotaskDetail(ele){
				uni.navigateTo({
					url: '../taskDetail/taskDetail?task=' + JSON.stringify(ele)
				})
			}
		}
	}
</script>


<style lang="scss" scoped>
@import './home.scss'
</style>
