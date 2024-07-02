import { RdProvider } from '@casts/rd-vite/client/components';

import { App as BaseApp } from '../packages/rd-theme/src';

const App = () => (
  <RdProvider>
    <BaseApp />
  </RdProvider>
);

export default App;
