<template>
	<div>
		<div style="height:50px"></div>
		<tabbar class="my-tabbar">
			<tabbar-item>
				<img slot="icon" src="../assets/nav.png" />
				<span slot="label">点餐</span>
			</tabbar-item>
			<tabbar-item>
				<img slot="icon" src="../assets/nav2.png" />
				<span slot="label">客说</span>
			</tabbar-item>
			<tabbar-item>
				<img slot="icon" src="../assets/nav3.png" />
				<span slot="label">我们</span>
			</tabbar-item>
			<tabbar-item>
				<img slot="icon" src="../assets/nav4.png" />
				<span slot="label">我的</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vux'

export default {
	name:'footer',
	components:{Tabbar,TabbarItem}
}
</script>

<style>
.my-tabbar{
	position: fixed !important;
}
</style>