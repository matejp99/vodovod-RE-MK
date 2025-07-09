// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AnalysisView from '@/views/AnalysisView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/analiza', name: 'Analiza', component: AnalysisView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
