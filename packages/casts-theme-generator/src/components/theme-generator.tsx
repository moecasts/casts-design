import 'react-color-palette/css';
import { forwardRef, Ref, RefObject, useImperativeHandle } from 'react';
import { capitalize } from '@casts/common';
import { Drawer } from '@casts/drawer';
import { MoonFill, SunFill } from '@casts/icons';
import { Popup } from '@casts/popup';
import { Switch } from '@casts/switch';

import { ColorPicker } from './color-picker';
import { useThemeGenerator } from './hooks';
import { ThemeGeneratorProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/theme-generator.scss';

export const ThemeGenerator = forwardRef(
  (props: ThemeGeneratorProps, ref: Ref<HTMLDivElement>) => {
    const {
      classes,
      styles,

      drawerClasses,

      itemClasses,
      itemTitleClasses,
      itemContentClasses,

      pickerClasses,
      pickerPreviewClasses,
      pickerTextClasses,
      mainColors,
      handleMainColorsChange,
      reverse,
      handleModeChange,

      visible,
      onVisibleChange,

      generatorRef,
    } = useThemeGenerator(props);

    useImperativeHandle(ref, () => generatorRef.current as HTMLDivElement);

    return (
      <Drawer
        className={drawerClasses}
        visible={visible}
        onChange={onVisibleChange}
        closeable
        header={'Theme Generator'}
      >
        <div
          ref={generatorRef as RefObject<HTMLDivElement>}
          className={classes}
          style={styles}
        >
          <div className={itemClasses}>
            <span className={itemTitleClasses}>Mode</span>
            <span className={itemContentClasses}>
              <Switch
                checked={reverse}
                onChange={handleModeChange}
                checkedIcon={<SunFill />}
                uncheckedIcon={<MoonFill />}
              />
            </span>
          </div>
          {mainColors.map(({ color, name }) => (
            <div key={name} className={itemClasses}>
              <span className={itemTitleClasses}>{capitalize(name)}</span>
              <span className={itemContentClasses}>
                <Popup
                  trigger="click"
                  placement="bottom"
                  attach={'.cds-drawer-root'}
                  content={
                    <ColorPicker
                      height={100}
                      hideInput={['rgb', 'hsv']}
                      color={color}
                      onChange={(color) =>
                        handleMainColorsChange({ name, color })
                      }
                    />
                  }
                >
                  <div className={pickerClasses}>
                    <span
                      className={pickerPreviewClasses}
                      style={{ backgroundColor: color }}
                    ></span>
                    <span className={pickerTextClasses}>{color}</span>
                  </div>
                </Popup>
              </span>
            </div>
          ))}
        </div>
      </Drawer>
    );
  },
);

ThemeGenerator.displayName = 'ThemeGenerator';
