<template>
  <div>
  	<x-header :left-options="{showBack:false}" 
  		title="caca"
  		:right-options="{showMore:true}"></x-header>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <divider>我caca</divider>
    <grid>
    	<grid-item label="viewbox" link="/view-box">
    		<img slot="icon" src="../assets/vux_logo.png">
    	</grid-item>
    	<grid-item label="formconfirm" link="/form-confirm">
    		<img slot="icon" src="../assets/vux_logo.png">
    	</grid-item>
    	<grid-item label="panel" link="/panel">
    		<img slot="icon" src="../assets/vux_logo.png">
    	</grid-item>
    </grid>
  </div>
</template>

<script>
import { Group, Cell, Divider,Grid,GridItem,XHeader } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Divider,Grid,GridItem,XHeader
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
