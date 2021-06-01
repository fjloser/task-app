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
		<liFilter @change="change" @select="select" :datalist="datalist" :height="height"></liFilter>
		<view class="content">
			<view class="condition-box">
				<view class="type-list" v-for="">
					
				</view>
			</view>
		</view>
		<view class="alert-select">
			<view class="select-type" v-for="(ele, index) in selectArr" :key='index'>
				<view class="type-name">
					{{ele.type}}
				</view>
				<view class="select-box">
					<view class="select-list" v-for="(ele, index1) in ele.arr" :key="index1" :class="{active:index1 == select1Index[index]}" @click="changeSelect1(index, index1)">
						
					</view>
				</view>
			</view>
			<view class="price-content">
				<input type="text" value="" />
				<text></text>
				<input type="text" value="" />
			</view>
			<view class="ensured">
				<view class="ensured-list" v-for="(ele, index) in ensured" :key="index" :class="{active:index == select2Index}" @click="changeSelect2(index)">
					{{ele}}
				</view>
			</view>
			<view class="authentication">
				<view class="authentication-list" v-for="(ele, index) in ensured" :key="index" :class="{active:index == select3Index}" @click="changeSelect3(index)">
					
				</view>
			</view>
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
				serviceIndex: 0,
				select1Index: ['', ''],
				select2Index: '',
				select3Index: 0,
				datalist: {},
				testList: {},
				height: 0.6,
				searchStr: '',
				service: ['服务', '案例', '店铺'],
				selectArr: [{type: '行业', arr: ['11', '22', '98', '88', '44', '11', '22', '98', '88', '11', '22', '98', '88', '11', '22', '98', '88', '11', '22', '98', '88']},
				{type: '行业', arr: ['11', '22', '98', '88', '44', '11', '22', '98', '88', '11', '22', '98', '88', '11', '22', '98', '88', '11', '22', '98', '88']}],
				ensured: ['888', '888', '999', '9055', '888', '888', '999', '9055', '888', '888', '999', '9055', '888', '888', '999', '9055',],
				authentication: ['22', '44', '344']
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
		methods: {
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
				this.select1Index[i] = j
			},
			changeSelect2(i){
				this.select2Index = i
			},
			changeSelect3(i){
				this.select3Index = i
			},
		}
	}
</script>


<style lang="scss" scoped>
@import './home.scss'
</style>
