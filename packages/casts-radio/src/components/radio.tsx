import clsx from 'clsx';
import { CSSProperties, FC } from 'react';
import { useConfig } from '@casts/config-provider';
import { useControlled, noop } from '@casts/hooks';
import { ChangeEventHandler } from '../types';
import './styles/radio.scss';

export type RadioProps = {
  className?: string;
  style?: CSSProperties;
  onChange?: ChangeEventHandler;
  allowUnchecked?: boolean;
};

export const Radio: FC<RadioProps> = (props) => {
  const {
    className,
    style,
    allowUnchecked = true,
    onChange: onChangeFromProps,
  } = props;
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('radio');
  const classes = clsx(className, prefixCls);
  const [checked, setChecked] = useControlled(
    props,
    'checked',
    onChangeFromProps,
  );

  const onChange = () => {
    if (checked && !allowUnchecked) {
      return;
    }
    setChecked(!checked);
  };

  return (
    <label className={classes} style={style}>
      <input
        type="radio"
        className={`${prefixCls}-pre`}
        checked={checked || false}
        onClick={onChange}
        // eslint-disable-next-line
        onChange={() => {}}
        tabIndex={0}
      />
      <span className={`${prefixCls}-input`}></span>
      <span className={`${prefixCls}-label`}>Radio</span>
    </label>
  );
};
