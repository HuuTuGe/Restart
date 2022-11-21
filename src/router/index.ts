import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import index from '../views/IndexView.vue'
import SelectTalent from  '../views/SelectTalentView.vue'
import Success from '../views/SuccessView.vue'
import NAchievement from '../views/NAchievementView.vue'
import SAchievement from '../views/SAchievementView.vue' 
import AchievementList from '../views/AchievementListView.vue'
import summary from '../views/SummaryView.vue'
import play from '../views/PlayView.vue'
import anniversary from '../views/AnniversaryView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/SelectTalent',
    name: 'select-talent',
    component: SelectTalent
  },
  {
    path: '/Success',
    name: 'success',
    component: Success
  },
  {
    path: '/Smmary',
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
    path: '/Play',
    name: 'play',
    component: play
  },
  {
    path: '/Anniversary',
    name: 'anniversary',
    component: anniversary
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
]

const router = new VueRouter({
  routes,
})

export default router
