<template>
	<div>
		<transition name="slideT">
		<router-view></router-view>
		</transition>
		
		<transition name="slideD">
		<tabbar class="my-tabbar" v-model="index">
			<tabbar-item link='home' :selected="this.$route.path=='/home'">
				<img slot="icon" src="../assets/nav.png" />
				<span slot="label">点餐</span>
			</tabbar-item>
			<tabbar-item link='form-confirm' :selected="this.$route.path=='/form-confirm'">
				<img slot="icon" src="../assets/nav2.png" />
				<span slot="label">客说</span>
			</tabbar-item>
			<tabbar-item link='panel' :selected="this.$route.path=='/panel'">
				<img slot="icon" src="../assets/nav3.png" />
				<span slot="label">我们</span>
			</tabbar-item>
			<tabbar-item link="/hello">
				<img slot="icon" src="../assets/nav4.png" />
				<span slot="label">我的</span>
			</tabbar-item>
		</tabbar>
		</transition>
	</div>
</template>

<script>
	import {Tabbar,TabbarItem} from 'vux'
	
	export default {
		components:{Tabbar,TabbarItem},
		mounted() {
		}
	}
</script>

<style>
.my-tabbar{
	position: fixed !important;
}
.slideT-leave-active {
	transform: translateX(100%);
}
</style>