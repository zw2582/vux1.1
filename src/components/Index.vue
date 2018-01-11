<template>
	<div>
		<!--滚动栏-->
		<swiper :list="list" :show-dots="false" auto loop height="263px"></swiper>
		
		<search class="search" placeholder="开启你的美味之旅..." :results="[{title: 'hello1'},{title: 'hello2'}]"></search>
		
		<grid>
			<grid-item v-for="item in menu">
				<img slot="icon" :src="item.icon"/>
				<span slot="label">{{item.label}}</span>
			</grid-item>
		</grid>

		<group>
			<cell title="积分菜品" value="more" is-link>
			</cell>
		</group>
		
		<flexbox :gutter="0" wrap="wrap">
				<flexbox-item :span="6" v-for="(pro,index) in pros">
					<div class="flex-demo">
						<img :src="pro.img" width="100%"/>
						<p>{{pro.name}}</p>
						<p>￥{{pro.price}}</p>
					</div>
				</flexbox-item>
		</flexbox>
		<div style="height:50px"></div>
	</div>
</template>

<script>
import {Swiper,Grid,GridItem,Group,Cell,Search,Panel,Flexbox,FlexboxItem} from 'vux'

import banner from '@/assets/banner.jpg'
import banner1 from '@/assets/banner1.jpg'
import icon from '@/assets/icon.jpg'
import icon1 from '@/assets/icon1.jpg'
import icon2 from '@/assets/icon2.jpg'
import icon3 from '@/assets/icon3.jpg'
import p from '@/assets/p.png'
import p1 from '@/assets/p1.png'
import p2 from '@/assets/p2.png'
import p3 from '@/assets/p3.png'


export default{
	components:{Swiper,Grid,GridItem,Group,Cell,Search,Panel,Flexbox,FlexboxItem},
	data(){
		return {
			list:[{
				url:'javascript:',
				img:banner
				},{
				url:'javascript:',
				img:banner1
			}],
			menu:[{
					icon:icon,
					label:'最新推荐',
				},{
					icon:icon1,
					label:'热门菜单',
				},{
					icon:icon2,
					label:'人气菜肴'
				},{
					icon:icon3,
					label:'优惠券'
				}],
			pros:[{
				img:p,
				name:'商务单人餐',
				price:'50'
				},{
				img:p1,
				name:'虐狗情人杯',
				price:'50'
				},{
				img:p2,
				name:'卤香滑鸡',
				price:'50'
				},{
				img:p3,
				name:'酷炫绵绵球',
				price:'50'
				}]
		}
	}
}
</script>

<style>
.weui-grid__icon {
	width:46.9px !important;
	height:46.9px !important;
}
.weui-grid:before {
	border-right: 0px !important;
}
.flex-demo {
  margin:10px;
}
</style>