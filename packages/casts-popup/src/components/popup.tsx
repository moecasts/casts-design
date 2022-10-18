import {
  cloneElement,
  CSSProperties,
  FC,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  arrow,
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  Placement,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions';
import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { useDidUpdate } from '@casts/hooks';
import './styles/popup.scss';

export type PopupTheme = 'light' | 'dark';

export type PopupTrigger = 'hover' | 'click' | 'focus' | 'manual';

export type PopupProps = {
  /**
   * custom class name
   */
  className?: string;
  /**
   * custom styles
   */
  style?: CSSProperties;
  /**
   * trigger node
   */
  children: ReactElement;
  visible?: boolean;
  /**
   * content node
   */
  content: ReactNode;
  /**
   * placement
   */
  placement?: Placement;
  /**
   * fade animation duration
   */
  animationDuration?: number;
  /**
   * trigger type
   */
  trigger?: PopupTrigger;
  /**
   * shadow style
   */
  shadow?: boolean;
  /**
   * disabled trigger event
   */
  disabled?: boolean;
  /**
   * is show arrow
   * @default true
   */
  showArrow?: boolean;
  /**
   * arrow size
   * @default 8
   */
  arrowSize?: number;
  /**
   * theme
   * @default light
   */
  theme?: PopupTheme;
  /**
   * attach node
   * @default document.body
   */
  attach?: string | HTMLElement;
  /**
   * visible time(ms). 0 or undefined is always visible,
   * only works when trigger is 'click'.
   */
  duration?: number;
  /**
   * delay time(ms)
   */
  delay?: number;
  /**
   * visible change event
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * disabled auto placement when popup is overflowing
   * @default false
   */
  disabledAutoPlacement?: boolean;
};

const SIDES_MAP = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
};

const ARROW_SIZE = 8;

const DEFAULT_PLACEMENT = 'top';

export const Popup: FC<PopupProps> = (props) => {
  const {
    className,
    style,
    visible = false,
    content,
    children,
    animationDuration = 200,
    trigger = 'hover',
    showArrow = true,
    arrowSize = ARROW_SIZE,
    shadow = true,
    theme = 'light',
    attach,
    disabled = false,
    delay = 0,
    duration,
    disabledAutoPlacement,
    onVisibleChange,
  } = props;

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('popup');
  const classes = clsx(prefixCls, className, {
    [`${prefixCls}--shadow`]: shadow,
    [`${prefixCls}--${theme}`]: theme,
  });
  const fadeClasses = clsx(getPrefixCls('fade'));

  const [open, setOpen] = useState(visible);
  useEffect(() => {
    if (visible === open) {
      return;
    }
    setOpen(visible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  useDidUpdate(() => {
    onVisibleChange?.(open);
  }, [open]);

  useEffect(() => {
    if (!duration || trigger !== 'click') {
      return;
    }

    const id = setTimeout(() => {
      setOpen(false);
    }, duration);
    return () => clearTimeout(id);
  }, [open, duration, trigger]);

  const arrowRef = useRef<HTMLDivElement | null>(null);

  const {
    placement,
    x,
    y,
    reference,
    floating,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    strategy,
    context,
    update,
  } = useFloating({
    placement: props.placement,
    open: open,
    onOpenChange: setOpen,
    middleware: [
      offset(4 + arrowSize),
      flip({
        mainAxis: !disabledAutoPlacement,
        crossAxis: !disabledAutoPlacement,
      }),
      shift({ padding: 8 }),
      arrow({
        element: arrowRef,
        padding: arrowSize,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const isNotManualTrigger = trigger !== 'manual';

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      restMs: delay,
      enabled: trigger === 'hover',
      handleClose: safePolygon(),
    }),
    useClick(context, {
      enabled: trigger === 'click',
    }),
    useFocus(context, {
      enabled: isNotManualTrigger && !duration,
      keyboardOnly: false,
    }),
    useDismiss(context, {
      enabled: isNotManualTrigger && !duration,
    }),
    useRole(context, { role: 'tooltip' }),
  ]);

  const arrowCallback = useCallback(
    (node: HTMLDivElement | null) => {
      arrowRef.current = node;
      update();
    },
    [update],
  );

  const styles = {
    position: strategy,
    top: '0px',
    left: '0px',
    transform: `translate3d(${x && Math.round(x)}px,${
      y && Math.round(y)
    }px, 0)`,
    ...style,
  };

  const staticSide = SIDES_MAP[placement.split('-')[0]];
  const arrowStyles = {
    width: `${arrowSize}px`,
    height: `${arrowSize}px`,
    top: arrowY != null ? `${arrowY}px` : '',
    left: arrowX != null ? `${arrowX}px` : '',
    right: '',
    bottom: '',
    [staticSide]: `-${arrowSize / 2}px`,
  };

  const rootElement = attach
    ? attach instanceof HTMLElement
      ? attach
      : (document.querySelector(attach) as HTMLElement)
    : undefined;

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children.props }),
      )}
      {!disabled && (
        <FloatingPortal id={`${prefixCls}-root`} root={rootElement}>
          <CSSTransition
            in={open}
            timeout={animationDuration}
            classNames={fadeClasses}
            unmountOnExit
          >
            <div
              {...getFloatingProps({
                ref: floating,
                className: classes,
                style: styles,
              })}
            >
              <div className={`${prefixCls}-content`}>{content}</div>
              {showArrow && (
                <div
                  className={`${prefixCls}-arrow`}
                  style={arrowStyles}
                  ref={arrowCallback}
                ></div>
              )}
            </div>
          </CSSTransition>
        </FloatingPortal>
      )}
    </>
  );
};

Popup.defaultProps = {
  placement: DEFAULT_PLACEMENT,
};
