import { noop, useControlled } from '@casts/common';
import { useConfig } from '@casts/config-provider';

import { defaultCurves } from '../../common';
import { Points } from '../../types';
import { UseCurveEditorProps } from '../types';

export const useCurveEditor = (props: UseCurveEditorProps) => {
  const { onChange = noop } = props;
  const { getPrefixCls } = useConfig();

  const [points, setPoints] = useControlled<Points>(
    props,
    'points',
    onChange,
    defaultCurves.easeInCubic.value,
  );

  const handleChange = setPoints;

  const prefixCls = getPrefixCls('curve-editor');

  const classes = `${prefixCls}`;

  const gridClasses = `${prefixCls}-grid`;
  const curveClasses = `${prefixCls}-curve`;
  const interactionClasses = `${prefixCls}-interaction`;
  const handleClasses = `${prefixCls}-handle`;

  return {
    classes,
    gridClasses,
    curveClasses,
    interactionClasses,
    handleClasses,

    points,
    handleChange,
  };
};
