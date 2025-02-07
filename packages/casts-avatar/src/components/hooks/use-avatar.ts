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
import { Size, SizeEnum } from '@casts/common';
import { GetPrefixCls } from '@casts/common';
import clsx from 'clsx';

import { defaultAvatarProps } from '../default-props';
import { AvatarGroupContext } from './use-avatar-group';

export type AvatarSize = Size | number;

export type UseAvatarProps = {
  /**
   * getPrefixCls is a function that returns a prefix class based on the component name and a customize prefix.
   */
  getPrefixCls: GetPrefixCls;
  /**
   * shape is an optional property that determines the shape of the avatar. It can be 'circle', 'round', or 'square'.
   */
  shape?: 'circle' | 'round' | 'square';
  /**
   * src is an optional property that specifies the URL of the image to be used as the avatar.
   */
  src?: string;
  /**
   * icon is an optional property that allows you to use a React element as the avatar.
   */
  icon?: ReactElement;
  /**
   * children is an optional property that allows you to add child elements to the avatar.
   */
  children?: ReactNode;
  /**
   * size is an optional property that determines the size of the avatar. It can be a specific size value or a predefined size string.
   */
  size?: AvatarSize;
  /**
   * style is an optional property that allows you to add custom inline styles to the avatar.
   */
  style?: CSSProperties;
  /**
   * onError is an optional property that specifies a function to be called when an error occurs while loading the avatar image.
   */
  onError?: () => void;
  /**
   * avatarNodeRef is an optional property that allows you to pass a ref to the avatar element.
   */
  avatarNodeRef?: RefObject<HTMLElement>;
  /**
   * gap is an optional property that specifies the gap between the avatar and the text.
   */
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
    gap = defaultAvatarProps.gap!,
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
    [`${prefixCls}--${size}`]: Object.values(SizeEnum).includes(
      size as SizeEnum,
    ),
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
    // offsetWidth avoid affecting be transform scale
    const childrenWidth = avatarTextRef.current.offsetWidth;
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
