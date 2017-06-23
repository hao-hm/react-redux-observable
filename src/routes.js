//lazy loading
import asyncComponent from './components/AsyncComponent';


function createRoutes() {
  return [
    {
      path: '/',
      exact: true,
      component: asyncComponent(() => import('./features/home'))
    },
    {
      path: '/about',
      component: asyncComponent(() => import('./features/about'))
    },
    {
      path: '/location',
      component: asyncComponent(() => import('./features/location'))
    },
    {
      component: asyncComponent(() => import('./features/notFound'))
    },
  ];
}

export default createRoutes;
