import { FC } from 'react';
import { useEffect } from 'react';
import { MouseEvent } from 'react';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';

import { useAnchorContext } from './anchor-context';
import { AnchorLinkProps } from './types';

export const AnchorLink: FC<AnchorLinkProps> = (props) => {
  const { href, title, children } = props;

  const { addLink, removeLink, activeLink, setCurrentActiveLink } =
    useAnchorContext();

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('anchor-link');

  const classes = clsx(prefixCls, {
    [`${prefixCls}--active`]: activeLink === href,
  });

  const titleClasses = `${prefixCls}-title`;

  useEffect(() => {
    if (!href) {
      return;
    }
    addLink(href);
    return () => removeLink(href);
  }, []);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.nativeEvent.preventDefault();
    if (!href) {
      return;
    }

    setCurrentActiveLink?.(href);
    window.location.replace(href);
  };

  return (
    <li className={classes}>
      <a href={href} className={titleClasses} onClick={handleClick}>
        {title}
      </a>
      {children && <ul className={`${prefixCls}-children`}>{children}</ul>}
    </li>
  );
};
