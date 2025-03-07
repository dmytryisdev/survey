export default [
  {
    path: 'survey',
    name: 'survey',
    component: () => import('../pages/SurveyPage.vue'),
    meta: {
      title: 'Опросы',
    },
  },
]