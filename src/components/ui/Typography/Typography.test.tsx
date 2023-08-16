import {Typography, TYPOGRAPHY_TEST_IDS, TypographyTag, TypographyProps, TypographyVariant} from "./Typography";
import cl from './Typography.module.scss'
import {render, screen} from "@testing-library/react";

describe('Typography variants', () => {
  const typographyVariants: TypographyVariant[] = [
    'h-1',
    'h-2',
    'h-3',
    'title-normal',
    'title-underlined',
    'title-bold',
    'title-bold-underlined',
    'title-micro',
    'title-small',
    'button-spaced'
  ]

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

  typographyVariants.forEach((variant) => {
    test(`should correctly show ${variant} variant when provided`, () => {
      render(<Typography variant={variant} children='test text'/>)
      const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER)

      expect(container).toHaveClass(classVariants[variant])
    })
  })
})
describe('Typography', () => {
  test('should correctly render children text', () => {
    render(<Typography variant='h-1' children='test text'/>)
    const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER)

    expect(container).toHaveTextContent('test text')
  })

  test('should render div tage by default', () => {
    render(<Typography variant='h-2' children='test text'/> )
    const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER)

    expect(container.tagName).toBe('DIV')
  })
})
