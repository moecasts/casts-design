import { noop, useControlled } from '@casts/common';
import {
  ColorPicker as BaseColorPicker,
  ColorService,
  IColor,
} from 'react-color-palette';

export type UseColorPickerProps = Omit<
  Parameters<typeof BaseColorPicker>[0],
  'color' | 'onChange'
> & {
  color?: string;
  defaultColor?: string;
  onChange?: (color: string) => void;
};
export type ColorPickerProps = UseColorPickerProps;

export const useColorPicker = (props: UseColorPickerProps) => {
  const { onChange = noop, ...rest } = props;
  const [color, setColor] = useControlled<string>(props, 'color', onChange);

  const handleChange = (iColor: IColor) => {
    setColor(iColor.hex);
  };

  return {
    ...rest,
    color: ColorService.convert('hex', color),
    onChange: handleChange,
  };
};

export const ColorPicker = (props: ColorPickerProps) => {
  const { color, onChange, ...rest } = useColorPicker(props);

  return <BaseColorPicker {...rest} color={color} onChange={onChange} />;
};
