import RoutesSurvey from './routes-survey.ts';
import RoutesUsers from './routes-users.ts';
import RoutesBlacklist from './routes-blacklist.ts';

const routes = [
  {
    path: '/',
    component: () => import('~/layouts/DefaultLayout.vue'),
    children: [
      ...RoutesSurvey,
      ...RoutesUsers,
      ...RoutesBlacklist
    ]
  },
]

export default routes