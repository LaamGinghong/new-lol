import Vue from 'vue'
import Router from 'vue-router'
import team_table from '@/components/team_table'
import grade from '@/components/grade'
import team_details from '@/components/team_details'
import teammate_details from '@/components/teammate_details'
import schedule from '@/components/schedule'
import game from '@/components/game'
import legends from '@/components/legends'
import team from '@/components/team'
import player from '@/components/player'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/team_table'
  },
    {
      path: '/team_table',
      name: 'team_table',
      component: team_table
    },
    {
      path: '/grade',
      name: 'grade',
      component: grade
    }, {
      path: '/team_details/:id',
      name: 'team_details',
      component: team_details
    }, {
      path: '/player/:id',
      name: 'teammate_details',
      component: teammate_details
    }, {
      path: '/schedule',
      name: 'schedule',
      component: schedule
    }, {
      path: '/game/:id',
      name: 'game',
      component: game
    }, {
      path: '/legends',
      name: 'legends',
      component: legends
    }, {
      path: '/team',
      name: 'team',
      component: team
    }, {
      path: '/player',
      name: player,
      component: player
    }
  ]
})
