<template>
	<div>
		<x-header title="提交确认" />
		<group>
			<cell title="总价" value="￥23.23" inline-desc="哈哈哈"
				link="/" is-loading="true" disabled="false"/>
			<cell-form-preview :list="good_list" />
		</group>
	</div>
</template>

<script>
	import {XHeader,Group,Cell,CellFormPreview} from 'vux'
	import Footer from '@/components/Footer'
	export default {
		components:{XHeader,Group,Cell,CellFormPreview,Footer},
		data(){
			return {
				good_list:[{
					label:'苹果',
					value:'3.2'
					},{
					label:'梨子',
					value:'12.33'
				}]
			}
		}
	}
</script>