import * as React from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { maskConfig, modalConfig } from '@/configs/motion';
import { AnimatePresence, motion } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';
import { cloneElement } from '../_util/reactNode';
import { Scrollbar, Button } from '../';
import './index.scss';

export interface ModalProps {
  className?: string;
  visible?: boolean;
  title?: React.ReactNode;
  closable?: boolean;
  loading?: boolean;
  disabled?: boolean;
  cancel?: React.ReactNode;
  ok?: React.ReactNode;
  children?: React.ReactNode;
  onClose?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  onOk?: (...args: any[]) => any;
}

const Portal: React.FC<ModalProps> = (props: ModalProps) => {
  const {
    className,
    title,
    closable = true,
    loading = false,
    disabled = false,
    cancel,
    ok,
    children,
    onClose,
    onCancel,
    onOk,
  } = props;

  const classes = classNames(className, 'component-modal flex flex-col items-stretch justify-center', {});

  const handleCancel = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
      onCancel?.(e) || onClose?.();
    },
    [onCancel, onClose],
  );

  const handleOk = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onOk?.(e);
    },
    [onOk],
  );

  const renderHeader = React.useMemo(() => {
    return (
      <div className="header flex flex-row items-center justify-between">
        <h2 className="title">{title}</h2>
        {closable && (
          <div className="close flex flex-row items-center justify-center" onClick={handleCancel}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                fill="#9E9D9A"
              />
            </svg>
          </div>

          // <img
          //   className="close"
          //   src={getImageUrl('@/assets/images/_global/icon-close.svg')}
          //   alt="icon"
          //   onClick={handleCancel}
          // />
        )}
      </div>
    );
  }, [title, closable, handleCancel]);

  const renderFooter = React.useMemo(() => {
    return (
      <div className="footer flex flex-row items-center justify-between">
        {cancel && (
          <Button type="second" onClick={handleCancel}>
            {cancel}
          </Button>
        )}
        {ok && (
          <Button type="solid" loading={loading} disabled={disabled} onClick={handleOk}>
            {ok}
          </Button>
        )}
      </div>
    );
  }, [loading, disabled, cancel, ok, handleCancel, handleOk]);

  const memoElement = React.useMemo(() => {
    const renderPortal = (
      <motion.div className={classes} {...maskConfig}>
        <motion.div className="inside flex flex-col items-stretch justify-between" {...modalConfig}>
          {(title || closable) && renderHeader}
          <Scrollbar className="content">{cloneElement(children)}</Scrollbar>
          {(cancel || ok) && renderFooter}
        </motion.div>
      </motion.div>
    );

    return <RemoveScroll>{renderPortal}</RemoveScroll>;
  }, [classes, title, closable, renderHeader, children, cancel, ok, renderFooter]);

  return createPortal(memoElement, window.document.body);
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { visible = false } = props;

  return <AnimatePresence>{visible && <Portal {...props} />}</AnimatePresence>;
};

export default Modal;
