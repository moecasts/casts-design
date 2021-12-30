import { PropsWithChildren } from 'react';
import { ConfigContext, ConfigContextProps } from '.';

describe('ExampleComponent', () => {
  it('is truthy', () => {
    const wrapper = ({ children }: PropsWithChildren<ConfigContextProps>) => (
      <ConfigContext.Provider value={{}}>{children}</ConfigContext.Provider>
    );
    console.log(wrapper);
  });
});
