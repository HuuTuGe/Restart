import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import index from '../views/IndexView.vue'
import SelectTalent from  '../views/SelectTalentView.vue'
import Success from '../views/SuccessView.vue'
import NAchievement from '../views/NAchievementView.vue'
import SAchievement from '../views/SAchievementView.vue' 
import AchievementList from '../views/AchievementListView.vue'
import summary from '../views/SummaryView.vue'
import anniversary from '../views/AnniversaryView.vue'
import choice from '../views/ChoiceView.vue'
import Play from '../views/PlayView.vue'
import chi from '../components/choise_ho.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/Choice',
    name: 'choice',
    component: choice
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
    path: '/Summary',
    name: 'summary',
    component: summary
  },
  {
    path: '/NAchievement',
    name: 'NAchievement',
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
    component: Play
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
  {
    path: '/p',
    name: 'play',
    component: Play
  },
  {
    path:'/c',
    name:'chi',
    component:chi
  }
]

const router = new VueRouter({
  routes,
})

export default router
