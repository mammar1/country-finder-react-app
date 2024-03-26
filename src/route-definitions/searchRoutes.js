import Countries from '../components/templates/Countries';

const searchRoutes = [
  {
    type: 'PUBLIC',
    props: {
      path: '/',
      exact: true,
      component: Countries,
    },
  },
];

export default searchRoutes;
