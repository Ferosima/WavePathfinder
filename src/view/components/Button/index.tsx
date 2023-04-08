import React, { ReactElement } from 'react';
import './styles.scss';

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  label?: string;
  spinnerColor?: string;
  fullSize?: boolean;
  children?: React.ReactNode;
  id?: string;
  onClick: any;
  preset?: 'primary' | 'secondary' | 'outline' | 'cancel';
}

const Button = ({
  preset = 'primary',
  label = 'button',
  style,
  className,
  disabled = false,
  loading = false,
  fullSize = false,
  children = null,
  onClick,
  id,
  ...props
}: IButtonProps): ReactElement => {
  let button: null | HTMLButtonElement = null;

  const _onClick = (event: any) => {
    if (!disabled && !loading) {
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <button
      {...props}
      id={id}
      ref={(ref) => (button = ref)}
      onClick={_onClick}
      className={`button ${className ? className : ''} th-controls-secondary ${preset}  ${
        disabled ? 'button-disabled' : ''
      } ${fullSize ? 'full-size' : ''}`}
      style={style}
      disabled={disabled || loading}
    >
      <div
        onClick={_onClick}
        className="button-content"
        style={{
          opacity: loading ? 0 : 1, // keeps button width the same when spinner is showing
        }}
      >
        {/* Label | Children */}
        {children || label}
      </div>
    </button>
  );
};

export default Button;
