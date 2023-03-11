import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import Details from '../pages/Details.vue';

const routes = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/:name',
		component: Details,
	}
]

const router = createRouter({
	routes,
	history: createWebHistory()
})

export default router;