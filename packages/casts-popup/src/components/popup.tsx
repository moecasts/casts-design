import {
  cloneElement,
  forwardRef,
  isValidElement,
  Ref,
  useImperativeHandle,
} from 'react';
import { has, useDefaultProps } from '@casts/common';
import {
  FloatingFocusManager,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  useFloatingParentNodeId,
} from '@floating-ui/react';
import { CSSTransition } from 'react-transition-group';

import { defaultPopupProps } from './default-props';
import { usePopup } from './hooks';
import { NestedPopupProvider } from './nested-popup-context';
import { PopupProps, PopupRef } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/popup.scss';

const _Popup = forwardRef((props: PopupProps, ref: Ref<PopupRef>) => {
  const {
    content,
    children,
    animationDuration = 200,
    showArrow = true,
    disabled = false,
    onVisibleChange,
  } = props;

  const {
    open,
    rootId,
    attachElement,
    classes,
    styles,
    contentClasses,
    arrowClasses,

    fadeClasses,
    arrowStyles,
    arrowRefCallback,

    nodeId,
    isNested,

    floatingReturn,
    interactionsReturn: { getFloatingProps, getReferenceProps },
    refs,
    nestable,
  } = usePopup(props);

  const { setReference, setFloating } = refs;

  useImperativeHandle(ref, () => ({
    getFloating: () => floatingReturn,
    getPopupElement: () => floatingReturn.refs.floating.current,
    getPortalElement: () => attachElement,
    getTriggerElement: () =>
      floatingReturn.refs.reference.current as HTMLElement | null,
    setVisible: (visible: boolean) => onVisibleChange?.(visible),
  }));

  const setReferenceRef = (el: HTMLElement | null) => {
    // @ts-ignore if is element and has ref
    if (has(children?.ref, 'current')) {
      // @ts-ignore same as upon
      children.ref.current = el;
    }

    setReference(el);
  };

  const childrenElement = isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  );

  const renderContent = () => (
    <>
      {cloneElement(
        childrenElement,
        getReferenceProps({
          ...childrenElement.props,
          ref: !disabled ? setReferenceRef : undefined,
        }),
      )}
      {!disabled && (
        <FloatingPortal
          id={!attachElement ? rootId : undefined}
          root={attachElement as HTMLElement | undefined}
        >
          <FloatingFocusManager
            context={floatingReturn.context}
            modal={false}
            initialFocus={isNested ? -1 : 0}
            returnFocus={!isNested}
            disabled={true}
          >
            <CSSTransition
              in={open}
              timeout={animationDuration}
              classNames={fadeClasses}
              unmountOnExit
              nodeRef={refs.floating}
            >
              <div
                {...getFloatingProps({
                  ref: setFloating,
                  className: classes,
                  style: styles,
                })}
              >
                <div className={contentClasses}>{content}</div>
                {showArrow && (
                  <div
                    className={arrowClasses}
                    style={arrowStyles}
                    ref={arrowRefCallback}
                  ></div>
                )}
              </div>
            </CSSTransition>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );

  if (nestable) {
    return (
      <NestedPopupProvider
        placement={props.placement}
        nestedPlacement={props.nestedPlacement}
      >
        <FloatingNode id={nodeId}>{renderContent()}</FloatingNode>
      </NestedPopupProvider>
    );
  }

  return <FloatingNode id={nodeId}>{renderContent()}</FloatingNode>;
});

_Popup.displayName = '_Popup';

export const Popup = forwardRef((props: PopupProps, ref: Ref<PopupRef>) => {
  const parentId = useFloatingParentNodeId();
  const propsWithDefault = useDefaultProps(props, defaultPopupProps);

  if (parentId === null && props.nestable) {
    return (
      <FloatingTree>
        <_Popup {...propsWithDefault} ref={ref} />
      </FloatingTree>
    );
  }

  return <_Popup {...propsWithDefault} ref={ref} />;
});

Popup.displayName = 'Popup';
