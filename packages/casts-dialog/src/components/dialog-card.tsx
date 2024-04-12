import { forwardRef, Ref, useCallback } from 'react';
import { Button } from '@casts/button';
import { useConfig } from '@casts/config-provider';
import { CloseLine } from '@casts/icons';
import { translate } from '@casts/locale';

import { useDialogCardClasses } from './hooks';
import { DialogCardProps, OpenChangeTriggerEnum } from './types';

export const DialogCard = forwardRef(
  (props: DialogCardProps, ref: Ref<HTMLDivElement>) => {
    const {
      title,
      header,
      closeable,
      simple,
      content,
      children,
      footer,
      onCancel,
      onConfirm,
      ...rest
    } = props;

    const { getPrefixCls, locale } = useConfig(props.isPlugin);

    const {
      dialogClasses,
      headerClasses,
      footerClasses,
      bodyClasses,
      closeClasses,
      dialogStyle,
    } = useDialogCardClasses({
      ...props,
      getPrefixCls,
    });

    const confirmText = props.confirmText || translate(locale.dialog.confirm);
    const cancelText = props.cancelText || translate(locale.dialog.cancel);

    const renderHeader = useCallback(() => {
      if (header === null) {
        return;
      }

      const defaultHeader = (
        <>
          <span>{title}</span>
          {closeable && !simple && (
            <Button
              icon={<CloseLine size="16px" />}
              variant="text"
              size="small"
              theme="neutral"
              shape="pill"
              className={closeClasses}
              onClick={(e) => onCancel(e, OpenChangeTriggerEnum.CLOSE)}
            />
          )}
        </>
      );

      return (
        <header className={headerClasses}>{header || defaultHeader}</header>
      );
    }, [
      header,
      title,
      closeable,
      simple,
      closeClasses,
      headerClasses,
      onCancel,
    ]);

    const renderContent = useCallback(
      () => <section className={bodyClasses}>{content || children}</section>,
      [bodyClasses, children, content],
    );

    const renderFooter = useCallback(() => {
      if (footer === null) {
        return;
      }

      const defaultFooter = (
        <>
          <Button
            pastel
            theme="neutral"
            onClick={(e) => onCancel(e, OpenChangeTriggerEnum.CANCEL)}
          >
            {cancelText}
          </Button>
          <Button onClick={(e) => onConfirm(e, OpenChangeTriggerEnum.CONFIRM)}>
            {confirmText}
          </Button>
        </>
      );
      return (
        <footer className={footerClasses}>{footer || defaultFooter}</footer>
      );
    }, [footer, cancelText, confirmText, footerClasses, onCancel, onConfirm]);

    return (
      <div
        role="presentation"
        className={dialogClasses}
        ref={ref}
        style={dialogStyle}
        {...rest}
      >
        {renderHeader()}
        {renderContent()}
        {renderFooter()}
      </div>
    );
  },
);

DialogCard.displayName = 'DialogCard';
