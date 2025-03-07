export default [
  {
    path: 'users',
    name: 'users',
    component: () => import('../pages/UsersPage.vue'),
    meta: {
      title: 'Пользователи',
    }
  },
]