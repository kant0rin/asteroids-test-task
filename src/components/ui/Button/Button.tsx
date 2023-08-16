import React from 'react';
import cl from './Button.module.scss'
import {Typography} from "../Typography/Typography";

type ButtonSize = 'big' | 'small'

export interface ButtonProps {
  children: React.ReactNode
  size: ButtonSize
  isInOrder: boolean,
  onClick: () => void
}

export const BUTTON_TEST_IDS = {
  CONTAINER: 'button-container'
}

export const Button: React.FC<ButtonProps>= ({children, size, isInOrder, onClick}) => {

  const buttonVariants = {
    'small' : cl.small,
    'big': cl.big
  }

  const inOrder = () => {
    return isInOrder ? cl.inOrder : null
  }

  return (
    <button
      className={`${buttonVariants[size]} ${cl.button} ${inOrder()}`}
      onClick={onClick}
      data-testid={BUTTON_TEST_IDS.CONTAINER}
    >
      {
        size === 'small'
          ? <Typography variant='button-spaced' tag='span'>{children}</Typography>
          : <Typography variant='title-bold' tag='span'>{children}</Typography>
      }
    </button>
  );
};

export default Button;
