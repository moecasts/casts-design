import { GetPrefixCls } from '@casts/config-provider';
import clsx from 'clsx';
import {
  cloneElement,
  createElement,
  CSSProperties,
  ReactElement,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { defaultProps } from '../default-props';
import { AvatarGroupContext } from './use-avatar-group';
import { Size } from '@casts/common';

export type AvatarSize = 'small' | 'medium' | 'large' | number;

export type UseAvatarProps = {
  getPrefixCls: GetPrefixCls;
  shape?: 'circle' | 'round' | 'square';
  src?: string;
  icon?: ReactElement;
  children?: ReactNode;
  size?: AvatarSize;
  style?: CSSProperties;
  onError?: () => void;
  avatarNodeRef?: RefObject<HTMLElement>;
  gap?: number;
};

export const useAvatar = (props: UseAvatarProps) => {
  const {
    getPrefixCls,
    src,
    icon,
    style,
    onError,
    children,
    avatarNodeRef,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    gap = defaultProps.gap!,
  } = props;

  const groupContext = useContext(AvatarGroupContext);

  const size = useMemo(
    () => groupContext?.size || props.size,
    [props.size, groupContext],
  );
  const shape = useMemo(
    () => groupContext?.shape || props.shape,
    [props.shape, groupContext],
  );

  const prefixCls = getPrefixCls('avatar');
  const classes = clsx(prefixCls, {
    [`${prefixCls}--${shape}`]: shape,
    [`${prefixCls}--${size}`]: Object.values(Size).includes(size as Size),
    [`${prefixCls}--image`]: src,
    [`${prefixCls}--icon`]: icon,
  });

  const presetStyles =
    typeof size !== 'number'
      ? {}
      : {
          height: size,
          width: size,
          fontSize: `${size / 2}px`,
        };
  const styles: CSSProperties = {
    ...presetStyles,
    ...style,
  };

  const [isImageExist, setIsImageExist] = useState(!!src);
  const [scale, setScale] = useState<number | undefined>(undefined);
  const [textMounted, setTextMounted] = useState(false);
  const avatarTextRef = useRef<HTMLElement>();

  const autoSetScale = () => {
    if (!avatarTextRef.current || !avatarNodeRef?.current) {
      return;
    }

    const childrenWidth = avatarTextRef.current.offsetWidth; // offsetWidth avoid affecting be transform scale
    const nodeWidth = avatarNodeRef.current.offsetWidth;
    // denominator is 0 is no meaning
    if (childrenWidth !== 0 && nodeWidth !== 0) {
      if (gap * 2 < nodeWidth) {
        setScale(
          nodeWidth - gap * 2 < childrenWidth
            ? (nodeWidth - gap * 2) / childrenWidth
            : 1,
        );
      }
    }
  };

  useEffect(() => {
    autoSetScale();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gap, isImageExist]);

  useEffect(() => {
    if (!avatarTextRef.current || isImageExist) {
      return;
    }
    setTextMounted(true);
  }, [isImageExist]);

  const handleImageLoadFailed = () => {
    onError?.();
    setIsImageExist(false);
  };

  const getRenderChildren = () => {
    if (typeof src === 'string' && isImageExist) {
      return createElement('img', {
        className: `${prefixCls}-image`,
        src,
        onError: handleImageLoadFailed,
      });
    }

    if (icon) {
      return cloneElement(icon, {
        className: `${prefixCls}-icon`,
      });
    }

    const childrenStyles: CSSProperties =
      textMounted || typeof scale !== 'undefined'
        ? {
            transform: scale !== 1 ? `scale(${scale})` : '',
          }
        : // To avoid size flash, add initial transparency
          { opacity: 0 };
    return createElement(
      'span',
      {
        className: `${prefixCls}-string`,
        ref: avatarTextRef,
        style: childrenStyles,
      },
      children,
    );
  };

  return {
    classes,
    styles,
    getRenderChildren,
  };
};
