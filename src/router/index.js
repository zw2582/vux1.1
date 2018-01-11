import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFrom from '@/components/HelloFromVux'
import ViewBox from '@/components/ViewBox'
import FormComfirm from '@/components/FormComfirm'
import Panel from '@/components/Panel'
import Index from '@/components/Index'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/hello',
    	name: 'HelloFrom',
    	component: HelloFrom
    },
    {
    	path: '/',
    	component: Main,
    	children:[
    		{
    			path:'home',
    			alias:'',
    			component: Index
    		},
    		{
    			path:'panel',
    			component: Panel
    		},
    		{
    	    	path: 'form-confirm',
    	    	component: FormComfirm
    	    },
    	    {
    	    	path: 'view-box',
    	    	component: ViewBox
    	    }
    	]
    }
  ]
})
