import {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';
import { isCanUseDocument } from '@casts/common';

export type PortalProps = {
  children?: ReactNode;
};

export const Portal = forwardRef((props: PortalProps, ref) => {
  const { children } = props;
  const container = useMemo(() => {
    if (!isCanUseDocument()) {
      return null;
    }
    const node = document.createElement('div');
    node.classList.add('cds-portal');
    return node;
  }, []);

  useEffect(() => {
    container && document.body.appendChild(container);

    return () => {
      container?.parentElement?.removeChild(container);
    };
  }, [container]);
  useImperativeHandle(ref, () => container);
  return container ? createPortal(children, container) : null;
});

Portal.displayName = 'Portal';
