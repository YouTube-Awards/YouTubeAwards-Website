import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/HomeView.vue')
		},
		{
			path: '/about',
			name: 'About',
			component: () => import('../views/AboutView.vue')
		},
		{
			path: '/previous-editions',
			name: 'Previous Editions',
			component: () => import('../views/PreviousEditionsView.vue')
		},
		{
			path: '/results',
			name: 'Results',
			component: () => import('../views/ResultsView.vue')
		},
		{
			path: '/vote',
			name: 'Vote',
			component: () => import('../views/VoteView.vue')
		}
	]
})

export default router
