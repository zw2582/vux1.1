import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFrom from '@/components/HelloFromVux'
import ViewBox from '@/components/ViewBox'
import FormComfirm from '@/components/FormComfirm'
import Panel from '@/components/Panel'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/hello',
    	name: 'HelloFrom',
    	component: HelloFrom
    },
    {
    	path: '/view-box',
    	name: 'ViewBox',
    	component: ViewBox
    },
    {
    	path: '/form-confirm',
    	component: FormComfirm
    },
    {
    	path: '/panel',
    	component: Panel
    },
    {
    	path: '/',
    	component: Index
    }
  ]
})
