// @flow
import React from 'react';
import type { Node as ReactNode } from 'react';
import cssModule from 'react-css-modules';
import { noop } from 'node-noop';
import classNames from 'classnames';

import s from './Button.scss';

export type ButtonProps = {
  onClick: SyntheticEvent<HTMLButtonElement>,
  children: ReactNode,
  disabled: boolean,
  tabIndex: number,
  type: "button" | "submit" | "reset",
  styleSheet: {
    button?: string,
    disabled?: string,
  }
};

const Button = ({
  onClick,
  children,
  disabled,
  styleSheet,
  tabIndex,
  type,
}: ButtonProps): ReactNode => (
  <button
    onClick={onClick}
    disabled={disabled}
    tabIndex={tabIndex}
    styleName="button"
    className={classNames(styleSheet.button, { [s.disabled]: disabled, [styleSheet.disabled]: disabled })}
    type={type}
  >
    {children}
  </button>
);


Button.defaultProps = {
  onClick: noop,
  children: 'Click me',
  disabled: false,
  tabIndex: 0,
  styleSheet: {
    button: 'button'
  },
  type: 'button'
};

export default cssModule(Button, s);
