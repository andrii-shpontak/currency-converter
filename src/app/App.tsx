import { RouterProvider, createRouter } from '@tanstack/react-router';

import { RecoilRoot } from 'recoil';
import { routeTree } from '../routeTree.gen';

const router = createRouter({ routeTree, basepath: '/currency-converter/' });

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
