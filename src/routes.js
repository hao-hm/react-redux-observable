//lazy loading
import asyncComponent from './components/AsyncComponent';


function createRoutes() {
  return [
    {
      path: '/',
      exact: true,
      component: asyncComponent(() => import('./features/home/Home'))
    },
    {
      path: '/about',
      component: asyncComponent(() => import('./features/about/About'))
    },
    {
      path: '/location',
      component: asyncComponent(() => import('./features/location/Location'))
    },
    {
      component: asyncComponent(() => import('./features/notFound/NotFound'))
    },
  ];
}

export default createRoutes;
