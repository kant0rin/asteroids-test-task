import { render, screen } from '@testing-library/react';

import {ApproachCardProps, APPROACH_CARD_TEST_IDS } from "./ApproachCard";
import ApproachCard from "./ApproachCard";

const cardProps: ApproachCardProps = {
  date: 'test date',
  velocity: 123,
  distance: 12312,
  orbit: 'Test orbit'
}

describe('Approach card', () => {
  test('should render date, when provided', () => {
    render(<ApproachCard {...cardProps}/>)
    const container = screen.getByTestId(APPROACH_CARD_TEST_IDS.DATE)

    expect(container).toHaveTextContent(cardProps.date)
  })

  test('should render velocity, when provided', () => {
    render(<ApproachCard {...cardProps}/>)
    const container = screen.getByTestId(APPROACH_CARD_TEST_IDS.VELOCITY)

    expect(container).toHaveTextContent('123')
  })

  test('should render distance, when provided', () => {
    render(<ApproachCard {...cardProps}/>)
    const container = screen.getByTestId(APPROACH_CARD_TEST_IDS.DISTANCE)

    expect(container).toHaveTextContent('12 312')
  })

  test('should render orbit, when provided', () => {
    render(<ApproachCard {...cardProps}/>)
    const container = screen.getByTestId(APPROACH_CARD_TEST_IDS.ORBIT)

    expect(container).toHaveTextContent('Test orbit')
  })
})
