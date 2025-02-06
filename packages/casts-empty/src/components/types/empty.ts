import { CSSProperties, ReactNode } from 'react';
import { BaseComponentProps } from '@casts/common';

export type UseEmptyProps = BaseComponentProps & {
  /**
   * The class name for the image.
   */
  imageClassName?: string;

  /**
   * The styles for the image.
   */
  imageStyle?: CSSProperties;

  /**
   * The image to display.
   */
  image?: ReactNode;

  /**
   * The text description.
   * hide the description when set to `false`.
   */
  description?: ReactNode | false;
};

export type EmptyProps = UseEmptyProps;
