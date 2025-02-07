import { flushSync } from 'react-dom';
import { noop, render } from '@casts/common';
import { CdsMotionDurationFast } from '@casts/theme';
import { toast, Toaster, ToastPosition } from 'react-hot-toast';

export const createToastContainerIfNotExists = (selector: string) => {
  const classSelector = selector
    .split(/\s+/)
    .map((className) => (className ? `.${className}` : ''))
    .join('');
  let container = document.querySelector(classSelector);

  if (!container) {
    container = document.createElement('div');
    render(
      <Toaster gutter={12}>
        {(t) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { promise, Component, props } = t as any;
          const style = {
            opacity: t.visible ? 1 : 0,
            animationName: getAnimationName(
              t.visible,
              t.position || 'top-center',
            ),
            animationDuration: CdsMotionDurationFast,
            animationTimingFunction: 'cubic-bezier(.21,1.02,.73,1)',
            ...(props?.style || {}),
          };
          const onClose = () => {
            props.onClose?.();
            toast.dismiss(t.id);
          };
          const componentProps = {
            ...props,
            style,
            content: t.message,
            onClose,
            placement: t.position,
          };
          if (promise) {
            componentProps.theme = t.type;
          }
          return <Component {...componentProps} />;
        }}
      </Toaster>,
      container,
    );

    container.setAttribute('class', selector);
    document.body.append(container);

    /**
     * ✐ NOTE:
     * When the container is created for the first time,
     * the toast does not appear immediately,
     * so needs to be synchronized with the state.
     */
    flushSync(noop);
  }

  return container;
};

const getAnimationName = (visible: boolean, ToastPosition: ToastPosition) => {
  const placement = ToastPosition?.split('-');
  if (placement.includes('left')) {
    return visible
      ? 'animate-enter-left-to-right'
      : 'animate-leave-right-to-left';
  }
  if (placement.includes('right')) {
    return visible
      ? 'animate-enter-right-to-left'
      : 'animate-leave-left-to-right';
  }
  if (placement.includes('bottom')) {
    return visible
      ? 'animate-enter-bottom-to-top'
      : 'animate-leave-top-to-bottom';
  }

  return visible
    ? 'animate-enter-top-to-bottom'
    : 'animate-leave-bottom-to-top';
};
