import { FC, MouseEvent, useMemo } from 'react';
import { Button } from '@casts/button';
import { last, map } from '@casts/common';
import { Translate2 } from '@casts/icons';
import { Layout } from '@casts/layout';
import { HeadMenu } from '@casts/menu';
import { useLocaleLocation } from '@casts/rd-vite/client/hooks/use-locale-location';
import { useRd } from '@casts/rd-vite/client/hooks/use-rd';
import { localeCodes } from '@casts/rd-vite/common';
import { Link, To, useNavigate } from 'react-router-dom';

// @ts-ignore svgr component
import { ReactComponent as Brand } from '../../../../src/brand.svg';
import { getPrefixCls } from '../common';

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
          e.nativeEvent.preventDefault();
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
          </>
        }
      ></HeadMenu>
    </Layout.Header>
  );
};
