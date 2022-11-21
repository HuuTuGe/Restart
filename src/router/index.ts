import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import index from '../views/IndexView.vue'
import SelectTalent from  '../views/SelectTalentView.vue'
import Success from '../views/SuccessView.vue'
import NAchievement from '../views/NAchievementView.vue'
import SAchievement from '../views/SAchievementView.vue' 
import AchievementList from '../views/AchievementListView.vue'
import summary from '../components/summary.vue'
import play from '../components/play.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/select_talent',
    name: 'select-talent',
    component: SelectTalent
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
  {
    path: '/summary',
    name: 'summary',
    component: summary
  },
  {
    path: '/NAchievementList',
    name: 'NAchievementList',
    component: NAchievement
  },
  {
    path: '/SAchievement',
    name: 'SAchievement',
    component: SAchievement
  },
  {
    path: '/AchievementList',
    name: 'AchievementList',
    component: AchievementList
  },
  {
    path: '*', redirect: '/',
    name: 'redirected'
  },
  {
    path: '/play',
    name: 'play',
    component: play
  }
]

const router = new VueRouter({
  routes,
})

export default router
