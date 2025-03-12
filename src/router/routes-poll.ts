export default [
  {
    path: 'survey',
    name: 'poll',
    component: () => import('~/pages/PollPage.vue'),
    meta: {
      title: 'Опросы',
    },
  },
  {
    path: '/survey/:id',
    component: () => import('../layouts/PollLayout.vue'),
    children: [
      {
        path: 'parameters',
        name: 'poll-parameters',
        component: () => import('~/pages/poll/PollParametersPage.vue'),
        meta: {
          title: 'Параметры',
        }
      },
      {
        path: 'questions',
        name: 'poll-questions',
        component: () => import('~/pages/poll/PollQuestionsPage.vue'),
        meta: {
          title: 'Вопросы',
        }
      },
      {
        path: 'logic',
        name: 'poll-logic',
        component: () => import('~/pages/poll/PollLogicPage.vue'),
        meta: {
          title: 'Логика',
        }
      },
      {
        path: 'conditions',
        name: 'poll-conditions',
        component: () => import('~/pages/poll/PollConditionsPage.vue'),
        meta: {
          title: 'Условия',
        }
      },
      {
        path: 'respondents',
        name: 'poll-respondents',
        component: () => import('~/pages/poll/PollRespondentsPage.vue'),
        meta: {
          title: 'Респонденты',
        }
      },
    ]
  },
]