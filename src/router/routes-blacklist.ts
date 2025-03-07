export default [
  {
    path: 'blacklist',
    name: 'blacklist',
    component: () => import('~/pages/BlacklistPage.vue'),
    meta: {
      title: 'Черные списки'
    }
  },
]