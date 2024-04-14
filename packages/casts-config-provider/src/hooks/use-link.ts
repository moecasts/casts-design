import { MouseEvent } from 'react';
import { LinkDOMProps, shouldClientNavigate, useRouter } from '@casts/common';

export type UseLinkProps = LinkDOMProps & {
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export const useLink = (props: UseLinkProps) => {
  const { onClick } = props;
  const router = useRouter();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // If a custom router is provided, prevent default and forward if this link should client navigate.
    if (
      !router.isNative &&
      e.currentTarget instanceof HTMLAnchorElement &&
      e.currentTarget.href &&
      // If props are applied to a router Link component, it may have already prevented default.
      !e.isDefaultPrevented() &&
      shouldClientNavigate(e.currentTarget, e) &&
      props.href
    ) {
      e.preventDefault();
      router.open(e.currentTarget, e, props.href, props.routerOptions);
    }
  };

  return {
    handleLinkClick,
  };
};

export type UseLinkPropsReturn = ReturnType<typeof useLink>;
