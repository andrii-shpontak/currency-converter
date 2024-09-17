import { Navigate, RouterProvider, createRouter } from '@tanstack/react-router';

import { RecoilRoot } from 'recoil';
import { routeTree } from '../routeTree.gen';

const router = createRouter({
  routeTree,
  basepath: '/currency-converter/',
  defaultNotFoundComponent: () => <Navigate to='/' />,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
