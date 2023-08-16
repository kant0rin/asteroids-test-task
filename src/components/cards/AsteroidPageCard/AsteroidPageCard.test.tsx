import { render, screen } from '@testing-library/react';

import {AsteroidPageCardProps, ASTEROID_PAGE_CARD_TEST_IDS } from "./AsteroidPageCard";
import AsteroidPageCard from "./AsteroidPageCard";

const asteroidPageCardProps = {
  name: 'test name',
  id: 123
}

describe('Asteroid page card', () => {
  test('should render name, when provided', () => {
    render(<AsteroidPageCard diameter={123} isDangerous={false} {...asteroidPageCardProps}/>)
    const container = screen.getByTestId(ASTEROID_PAGE_CARD_TEST_IDS.NAME)

    expect(container).toHaveTextContent('test name')
  })

  test('should render id, when provided', () => {
    render(<AsteroidPageCard diameter={123} isDangerous={false} {...asteroidPageCardProps}/>)
    const container = screen.getByTestId(ASTEROID_PAGE_CARD_TEST_IDS.ID)

    expect(container).toHaveTextContent('123')
  })

  test('should render dangerous text, when provided', () => {
    render(<AsteroidPageCard diameter={123} isDangerous={true} {...asteroidPageCardProps}/>)
    const container = screen.getByTestId(ASTEROID_PAGE_CARD_TEST_IDS.IS_DANGER)

    expect(container).toBeInTheDocument()
  })


  test('should render diameter, when provided', () => {
    render(<AsteroidPageCard diameter={123} isDangerous={true} {...asteroidPageCardProps}/>)
    const container = screen.getByTestId(ASTEROID_PAGE_CARD_TEST_IDS.DIAMETER)

    expect(container).toHaveTextContent('123')
  })
})

describe('Asteroid page card rock size', () => {
  test('should render big rock, when provided', () => {
    render(<AsteroidPageCard diameter={123} isDangerous={false} {...asteroidPageCardProps}/>)
    const container = screen.getByTestId(ASTEROID_PAGE_CARD_TEST_IDS.BIG_ROCK)

    expect(container).toBeInTheDocument()
  })

  test('should render small rock, when provided', () => {
    render(<AsteroidPageCard diameter={23} isDangerous={false} {...asteroidPageCardProps}/>)
    const container = screen.getByTestId(ASTEROID_PAGE_CARD_TEST_IDS.SMALL_ROCK)

    expect(container).toBeInTheDocument()
  })
})
