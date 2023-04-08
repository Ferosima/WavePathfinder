import React, {
  ForwardedRef,
  ReactElement,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './styles.scss';

export interface ISimpleInput
  extends Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type' | 'ref'
  > {
  inputClassName?: string;
  error?: string | null;
  onClick?: () => void;
  nativeType?: HTMLInputElement['type'];
}

export const Input = forwardRef(
  (
    {
      id,
      className,
      inputClassName,
      error,
      onClick,
      placeholder,
      value,
      onChange,
      onSubmit,

      nativeType,
      ...rest
    }: ISimpleInput,
    innerRef?: ForwardedRef<HTMLInputElement>,
  ): ReactElement => {
    const ref = useRef<HTMLInputElement>(null);
    useImperativeHandle(innerRef, () => ref.current!, [ref]);

    const [_value, setValue] = useState(value);
    const [focused, setFocus] = useState(false);

    useEffect(() => {
      if (document.activeElement === ref.current) {
        setFocus(true);
      }
    }, [document.activeElement, ref.current]);

    const _onClick = useCallback(() => {
      setFocus(true);
      ref.current?.focus();
      if (onClick) onClick();
    }, [onClick, ref.current]);

    const _onBlur = useCallback((e: any) => {
      setFocus(false);
    }, []);

    const _onChange = useCallback(
      (e: any) => {
        setValue(e.target.value);
        if (onChange) onChange(e.target.value);
      },
      [onChange],
    );

    const handleKeyDown = useCallback(
      (event: any) => {
        if (event.key === 'Enter') {
          if (onSubmit) onSubmit(event);
        }
      },
      [onSubmit],
    );

    return (
      <div id={id} className={`input-wrapper ${className || ''}`}>
        <div
          className={`input ${error ? 'error' : ''}  ${focused ? 'focused' : ''} `}
          onClick={_onClick}
        >
          {/* Input */}
          <input
            type={nativeType}
            {...rest}
            ref={ref}
            defaultValue={value}
            placeholder={placeholder}
            className={`${inputClassName || ''}`}
            onBlur={_onBlur}
            onChange={_onChange}
            onSubmit={onSubmit}
            onKeyDown={handleKeyDown}
          />
          {/* Error Message */}
        </div>
        <div
          className={`color-danger family-regular error-container ${error ? 'visible' : 'hidden'}`}
        >
          {error}
        </div>
      </div>
    );
  },
);
