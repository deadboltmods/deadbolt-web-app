import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},

	// DCP + DECP
	{
		path: '/dcp',
		name: 'DCP',
		component: () => import( '@/views/DCP.vue' )
	},
	{
		path: '/decp',
		name: 'DECP',
		component: () => import( '@/views/DECP.vue' )
	},

	// Config Apps
	{
		path: '/config/customjson',
		name: 'customjson',
		component: () => import( '@/views/CustomJson.vue' ),
	},

	// Guides
	{
		path: '/guides',
		name: 'guides',
		component: () => import( '@/views/Guides.vue' ),
	},

	// Settings
	{
		path: '/settings',
		name: 'settings',
		component: () => import( '@/views/Settings.vue' ),
	},

	// Resources
	{
		path: '/resources',
		name: 'resources',
		component: () => import( '@/views/Resources.vue' ),
	},
]

const headHeight = 50;
const yPadding = 0;

export default new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior ( to, from, savedPosition )
	{
		if ( savedPosition )
		{
			return savedPosition;
		}
		else if ( to.hash )
		{
			return {
				selector: to.hash,
					offset: {
					x: 0,
					y: headHeight + yPadding  // header height + padding
				}
			}
		}
		else
		{
			return { x: 0, y: 0 }
		}
	}
})