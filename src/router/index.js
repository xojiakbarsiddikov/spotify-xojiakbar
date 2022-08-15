import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import vPage from "@/components/main_page/vPage.vue";
import vEgo from "@/components/main_page/vEgo";
import vJah_Khalib from "@/components/main_page/vJah-khalib"

const routes =  [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/v-page/1',
    name: 'vPage',
    component: vPage
  },
  {
    path: '/v-page/2',
    name: 'vEgo',
    component: vEgo
  },
  {
    path: '/v-page/3',
    name: 'vJah_Khalib',
    component: vJah_Khalib
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
