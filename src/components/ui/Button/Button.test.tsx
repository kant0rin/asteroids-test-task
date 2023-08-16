import {ButtonProps, BUTTON_TEST_IDS, Button} from "./Button";
import cl from './Button.module.scss'
import {render, screen} from "@testing-library/react";

describe('Button is in order', () => {
  test('should correct show styles, when provided', () => {
    const className = cl.inOrder
    render(<Button size='small' isInOrder={true} children='button text' onClick={() => {}}/>)
    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER)

    expect(container).toHaveClass(className)
  })

  test('should not show styles, when provided', () => {
    const className = cl.inOrder
    render(<Button size='small' isInOrder={false} children='button text' onClick={() => {}}/>)
    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER)

    expect(container).not.toHaveClass(className)
  })
})

describe('Button size', () => {
  test('should correct show big size, when provided', () => {
    const className = cl.big
    render(<Button size='big' isInOrder={false} children='button text' onClick={() => {}}/>)
    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER)

    expect(container).toHaveClass(className)
  })

  test('should correct show small size, when provided', () => {
    const className = cl.small
    render(<Button size='small' isInOrder={false} children='button text' onClick={() => {}}/>)
    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER)

    expect(container).toHaveClass(className)
  })
})
