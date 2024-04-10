import { FC, MouseEvent, useMemo, useRef } from 'react';
import { Button } from '@casts/button';
import { last, map } from '@casts/common';
import { useConfig } from '@casts/config-provider';
import { Translate2 } from '@casts/icons';
import { Layout } from '@casts/layout';
import { HeadMenu } from '@casts/menu';
import { useLocaleLocation } from '@casts/rd-vite/client/hooks/use-locale-location';
import { useRd } from '@casts/rd-vite/client/hooks/use-rd';
import { localeCodes } from '@casts/rd-vite/common';
import clsx from 'clsx';
import { Link, To, useNavigate } from 'react-router-dom';

// @ts-ignore svgr component
import { ReactComponent as Brand } from '../../../../src/brand.svg';
import { getPrefixCls } from '../common';
import { isLinkClick } from '../utils';
import { useThemeSwitch } from './hooks/use-theme-switch';

import '@theme-toggles/react/css/Around.css';

// eslint-disable-next-line @typescript-eslint/ban-types
export type HeaderProps = {};

const navToMenuData = (data: any): any[] => {
  return map(data, (item) => {
    const { title, path, ...rest } = item;

    const children = item.children ? navToMenuData(item.children) : undefined;

    return {
      key: title,
      label: title,
      value: path,
      children,
      href: path,
      ...rest,
    };
  });
};

export const Header: FC<HeaderProps> = () => {
  const { nav = [], matches } = useRd();
  const navigate = useNavigate();

  const active = useMemo(
    () => last(matches)?.route.meta?.nav?.path,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [last(matches)?.route.meta?.nav?.path],
  );

  const { firstDiffLocale, getLocaleLocation } = useLocaleLocation(localeCodes);

  const firstDiffLocaleLocation = useMemo(
    () => getLocaleLocation(firstDiffLocale),
    [firstDiffLocale, getLocaleLocation],
  );

  const indexRoute = useMemo(() => {
    const baseRoute = matches?.[0]?.pathname || '';
    return `${baseRoute}/`.replace(/\/(\/)+/g, '/');
  }, [matches]);

  const { themeMode } = useConfig();

  const themeSwitchRef = useRef<HTMLButtonElement>(null);

  const { toggleThemeMode } = useThemeSwitch(themeSwitchRef);

  return (
    <Layout.Header>
      <HeadMenu
        className={`${getPrefixCls('navbar')}`}
        logo={
          <Link
            to={indexRoute}
            onClick={() => {
              navigate(indexRoute);
            }}
          >
            <Brand
              style={{ width: '96px', fill: 'var(--cds-color-text-primary)' }}
            />
          </Link>
        }
        value={active}
        size="large"
        onChange={(value) => {
          navigate(value as To);
        }}
        onClickCapture={(e: MouseEvent<HTMLDivElement>) => {
          if (isLinkClick(e)) {
            e.nativeEvent.preventDefault();
          }
        }}
        items={navToMenuData(nav)}
        operations={
          <>
            <Button
              icon={<Translate2 />}
              variant="link"
              theme="neutral"
              href={firstDiffLocaleLocation}
              onClick={() => navigate(firstDiffLocaleLocation)}
            ></Button>

            <Button
              className={clsx(getPrefixCls('theme-switcher'), 'theme-toggle', {
                'theme-toggle--toggled': themeMode === 'dark',
              })}
              size="large"
              ref={themeSwitchRef}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className="theme-toggle__around"
                  viewBox="0 0 32 32"
                >
                  <clipPath id="theme-toggle__around__cutout">
                    <path d="M0 0h42v30a1 1 0 00-16 13H0Z" />
                  </clipPath>
                  <g clipPath="url(#theme-toggle__around__cutout)">
                    <circle cx="16" cy="16" r="8.4" />
                    <g>
                      <circle cx="16" cy="3.3" r="2.3" />
                      <circle cx="27" cy="9.7" r="2.3" />
                      <circle cx="27" cy="22.3" r="2.3" />
                      <circle cx="16" cy="28.7" r="2.3" />
                      <circle cx="5" cy="22.3" r="2.3" />
                      <circle cx="5" cy="9.7" r="2.3" />
                    </g>
                  </g>
                </svg>
              }
              variant="link"
              theme="neutral"
              href={firstDiffLocaleLocation}
              onClick={toggleThemeMode}
            ></Button>
          </>
        }
      ></HeadMenu>
    </Layout.Header>
  );
};
