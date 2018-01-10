<template>
	<view-box body-padding-top="0px">
		<x-header slot="header" title="view-box" />
		<div slot="default">
			<p v-for="i in 100">{{i}}</p>
		</div>
	</view-box>
</template>

<script>
	import {ViewBox,XHeader} from 'vux'
	export default {
		components:{ViewBox,XHeader}
	}
</script>