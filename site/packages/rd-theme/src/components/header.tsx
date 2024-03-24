import { FC, MouseEvent, useMemo } from 'react';
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

import '@theme-toggles/react/css/Expand.css';

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

  const { themeMode, setConfig } = useConfig();

  const toggleThemeMode = () => {
    const newThemeMode = themeMode === 'dark' ? 'default' : 'dark';

    setConfig({ themeMode: newThemeMode });
  };

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
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  className={'theme-toggle__expand'}
                  viewBox="0 0 32 32"
                >
                  <clipPath id="theme-toggle__expand__cutout">
                    <path d="M0-11h25a1 1 0 0017 13v30H0Z" />
                  </clipPath>
                  <g clipPath="url(#theme-toggle__expand__cutout)">
                    <circle cx="16" cy="16" r="8.4" />
                    <path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z" />
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
