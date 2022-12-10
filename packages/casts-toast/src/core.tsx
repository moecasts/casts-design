import { createRoot } from 'react-dom';
import toast, { Toaster, ToastPosition } from 'react-hot-toast';
import './styles.scss';

export const createToastContainerIfNotExists = (selector: string) => {
  const classSelector = selector
    .split(/\s+/)
    .map((className) => (className ? `.${className}` : ''))
    .join('');
  let container = document.querySelector(classSelector);

  if (!container) {
    setTimeout(() => {
      container = document.createElement('div');
      const root = createRoot(container);

      root.render(
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
              animationDuration: '.35s',
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
            };
            if (promise) {
              componentProps.theme = t.type;
            }
            return <Component {...componentProps} />;
          }}
        </Toaster>,
      );
      container.setAttribute('class', selector);
      document.body.append(container);
    });
  }
  return container;
};

const getAnimationName = (visible: boolean, toastPosition: ToastPosition) => {
  const position = toastPosition?.split('-');
  if (position.includes('left')) {
    return visible
      ? 'animate-enter-left-to-right'
      : 'animate-leave-right-to-left';
  }
  if (position.includes('right')) {
    return visible
      ? 'animate-enter-right-to-left'
      : 'animate-leave-left-to-right';
  }
  if (position.includes('bottom')) {
    return visible
      ? 'animate-enter-bottom-to-top'
      : 'animate-leave-top-to-bottom';
  }

  return visible
    ? 'animate-enter-top-to-bottom'
    : 'animate-leave-bottom-to-top';
};
