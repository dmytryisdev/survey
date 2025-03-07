export default [
  {
    path: 'survey',
    name: 'survey',
    component: () => import('../pages/SurveyPage.vue'),
    meta: {
      title: 'Опросы',
    },
  },
  {
    path: '/survey/:id',
    component: () => import('../layouts/SurveyLayout.vue'),
    children: [
      {
        path: 'parameters',
        name: 'survey-parameters',
        component: () => import('../pages/survey/SurveyParametersPage.vue'),
        meta: {
          title: 'Параметры',
        }
      },
      {
        path: 'questions',
        name: 'survey-questions',
        component: () => import('../pages/survey/SurveyQuestionsPage.vue'),
        meta: {
          title: 'Вопросы',
        }
      },
      {
        path: 'logic',
        name: 'survey-logic',
        component: () => import('../pages/survey/SurveyLogicPage.vue'),
        meta: {
          title: 'Логика',
        }
      },
      {
        path: 'conditions',
        name: 'survey-conditions',
        component: () => import('../pages/survey/SurveyConditionsPage.vue'),
        meta: {
          title: 'Условия',
        }
      },
      {
        path: 'respondents',
        name: 'survey-respondents',
        component: () => import('../pages/survey/SurveyRespondentsPage.vue'),
        meta: {
          title: 'Респонденты',
        }
      },
    ]
  },
]