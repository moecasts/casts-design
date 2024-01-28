import { useRoutes } from 'react-router-dom';
import { rdProvider } from 'virtual:rd-provider';

export const Routes = () => {
  const { routes } = rdProvider;
  const element = useRoutes(routes);
  return element;
};
