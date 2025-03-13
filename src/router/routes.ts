import RoutesPoll from './routes-poll.ts';
import RoutesUsers from './routes-users.ts';
import RoutesBlacklist from './routes-blacklist.ts';

const routes = [
  {
    path: '/',
    redirect: '/poll',
    component: () => import('~/layouts/DefaultLayout.vue'),
    children: [
      ...RoutesPoll,
      ...RoutesUsers,
      ...RoutesBlacklist
    ]
  },
]

export default routes;