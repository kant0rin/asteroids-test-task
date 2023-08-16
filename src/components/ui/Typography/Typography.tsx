import React from 'react';
import cl from './Typography.module.scss'
import {BUTTON_TEST_IDS} from "@/components/ui";

export type TypographyVariant =
  | 'h-1'
  | 'h-2'
  | 'h-3'
  | 'title-normal'
  | 'title-underlined'
  | 'title-bold'
  | 'title-bold-underlined'
  | 'title-micro'
  | 'title-small'
  | 'button-spaced'
export type TypographyTag = 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div';
export type TypographyProps = {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children: React.ReactNode
}

export const TYPOGRAPHY_TEST_IDS = {
  CONTAINER: 'typography-container'
}

export const Typography: React.FC<TypographyProps> = ({variant, tag: Tag = 'div', children}) => {

  const classVariants = {
    'h-1': cl.h1,
    'h-2': cl.h2,
    'h-3': cl.h3,
    'title-normal': cl.normal,
    'title-underlined': cl.underlined,
    'title-bold': cl.bold,
    'title-bold-underlined': cl.boldUnderlined,
    'title-micro': cl.micro,
    'title-small': cl.small,
    'button-spaced': cl.spaced
  }

  return (
    <Tag className={classVariants[variant]} data-testid={TYPOGRAPHY_TEST_IDS.CONTAINER}>
      {children}
    </Tag>
  )
}
export default Typography
