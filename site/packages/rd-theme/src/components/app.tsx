import { FC, useEffect } from 'react';
import { useRef } from 'react';
import { isEmpty, scrollTo } from '@casts/common';
import {
  ConfigProvider,
  type ConfigProviderProps,
} from '@casts/config-provider';
import { Layout } from '@casts/layout';
import { enUS } from '@casts/locale';
import { useRd } from '@casts/rd-vite/client/hooks/use-rd';
import { CdsMotionDurationRapid } from '@casts/theme';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { getPrefixCls } from '../common';
import { DocBanner } from './doc-features/doc-banner';
import { FloatButton } from './doc-features/float-button';
import { SiteContent } from './layout/content';
import { SiteFooter } from './layout/footer';
import { Header } from './layout/header';
import { Sidebar } from './layout/sidebar';
import { useAppContext } from './store/context';
import { AppProvider } from './store/provider';

import '@casts/theme/styles/scss/core.scss';
import './styles/app.scss';

const { Content, Footer, Aside } = Layout;

export const App: FC<Partial<ConfigProviderProps>> = (props) => {
  return (
    <AppProvider>
      <_App {...props} />
    </AppProvider>
  );
};

const _App: FC<Partial<ConfigProviderProps>> = () => {
  const { menu, matches } = useRd();

  const asideContentRef = useRef<HTMLDivElement>(null);
  const asideOverlayRef = useRef<HTMLDivElement>(null);

  const { themeMode, asideVisible, toggleAsideVisible } = useAppContext();

  const navigate = useNavigate();

  /**
   * scroll to top when route change
   */
  const currentRoute = matches?.[matches.length - 1].route;
  useEffect(() => {
    scrollTo(0);
  }, [currentRoute]);

  return (
    <ConfigProvider locale={enUS} themeMode={themeMode} navigate={navigate}>
      <Layout className={`${getPrefixCls('root-layout')}`}>
        <Header />
        <Layout className={`${getPrefixCls('sub-layout')}`}>
          {!isEmpty(menu) && (
            <Aside
              className={clsx(getPrefixCls('aside'), {
                'is-hide': !asideVisible,
              })}
            >
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
              <DocBanner />
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
