import { FC } from 'react';
import { useRef } from 'react';
import { Button } from '@casts/button';
import { isEmpty } from '@casts/common';
import {
  ConfigProvider,
  type ConfigProviderProps,
} from '@casts/config-provider';
import { MenuFoldLine, MenuUnfoldLine } from '@casts/icons';
import { Layout } from '@casts/layout';
import { enUS } from '@casts/locale';
import { useRd } from '@casts/rd-vite/client/hooks/use-rd';
import { CdsMotionDurationRapid } from '@casts/theme';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

import { getPrefixCls } from '../common';
import { SiteContent } from './content';
import { useAppContext } from './context';
import { FloatButton } from './float-button';
import { SiteFooter } from './footer';
import { Header } from './header';
import { useAside } from './hooks';
import { AppProvider } from './provider';
import { Sidebar } from './sidebar';

import '@casts/theme/styles/scss/core.scss';
import './styles/app.scss';

const { Content, Footer, Aside } = Layout;

export const App: FC<Partial<ConfigProviderProps>> = (props) => {
  return (
    <AppProvider>
      <InternalApp {...props} />
    </AppProvider>
  );
};

export const InternalApp: FC<Partial<ConfigProviderProps>> = () => {
  const { menu } = useRd();

  const { isAsideShouldFloat, asideVisible, toggleAsideVisible } = useAside();
  const asideContentRef = useRef<HTMLDivElement>(null);
  const asideOverlayRef = useRef<HTMLDivElement>(null);

  const { themeMode } = useAppContext();

  return (
    <ConfigProvider locale={enUS} themeMode={themeMode}>
      <Layout className={`${getPrefixCls('root-layout')}`}>
        <Header />
        <Layout className={`${getPrefixCls('sub-layout')}`}>
          {!isEmpty(menu) && (
            <Aside
              className={clsx(getPrefixCls('aside'), {
                'is-hide': !asideVisible,
              })}
            >
              {isAsideShouldFloat && (
                <Button
                  className={`${getPrefixCls('aside-collapse-button')}`}
                  icon={asideVisible ? <MenuFoldLine /> : <MenuUnfoldLine />}
                  onClick={toggleAsideVisible}
                  shape="square"
                  pastel
                  theme="neutral"
                ></Button>
              )}
              <CSSTransition
                in={asideVisible}
                mountOnEnter
                nodeRef={asideContentRef}
                timeout={parseInt(CdsMotionDurationRapid)}
                classNames={getPrefixCls('aside-animate')}
                appear
              >
                <div
                  className={`${getPrefixCls('aside-content')}`}
                  ref={asideContentRef}
                >
                  <CSSTransition
                    in={asideVisible}
                    nodeRef={asideOverlayRef}
                    timeout={200}
                    appear
                    unmountOnExit
                    classNames={'cds-fade'}
                  >
                    <div
                      role="presentation"
                      className={`${getPrefixCls('aside-overlay')}`}
                      tabIndex={-1}
                      onClick={toggleAsideVisible}
                      ref={asideOverlayRef}
                    ></div>
                  </CSSTransition>
                  <Sidebar />
                </div>
              </CSSTransition>
            </Aside>
          )}
          <Layout className={`${getPrefixCls('content-layout')}`}>
            <Content className={`${getPrefixCls('content')}`}>
              <SiteContent />
            </Content>
            <Footer className={`${getPrefixCls('footer')}`}>
              <SiteFooter />
            </Footer>
          </Layout>
        </Layout>
        <FloatButton />
      </Layout>
    </ConfigProvider>
  );
};
