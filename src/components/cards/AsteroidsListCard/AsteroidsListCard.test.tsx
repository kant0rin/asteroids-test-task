import { render, screen } from '@testing-library/react';

import AsteroidsListCard, {CardProps, ASTEROIDS_LIST_CARD_TEST_IDS} from "./AsteroidsListCard";
import AsteroidPageCard, {ASTEROID_PAGE_CARD_TEST_IDS} from "@/components/cards/AsteroidPageCard/AsteroidPageCard";

const cardProps = {
  date: 'test date',
  name: 'test name',
  kilometreDistance: 123,
  lunarDistance: 321,
  id: 123123,
}

describe('Asteroids list card', () => {
  test('should render name, when provided', () => {
    render(<AsteroidsListCard {...cardProps} diameter={123} isDangerous={true} withButton={true}/>)
    const container = screen.getByTestId(ASTEROIDS_LIST_CARD_TEST_IDS.NAME)

    expect(container).toHaveTextContent('test name')
  })

  test('should render date, when provided', () => {
    render(<AsteroidsListCard {...cardProps} diameter={123} isDangerous={true} withButton={true}/>)
    const container = screen.getByTestId(ASTEROIDS_LIST_CARD_TEST_IDS.DATE)

    expect(container).toHaveTextContent('test date')
  })

  test('should render name, when provided', () => {
    render(<AsteroidsListCard {...cardProps} diameter={123} isDangerous={true} withButton={true}/>)
    const container = screen.getByTestId(ASTEROIDS_LIST_CARD_TEST_IDS.NAME)

    expect(container).toHaveTextContent('test name')
  })

  test('should render lunar, when provided', () => {
    render(<AsteroidsListCard {...cardProps} isInLunar={true} diameter={123} isDangerous={true} withButton={true}/>)
    const container = screen.getByTestId(ASTEROIDS_LIST_CARD_TEST_IDS.LUNAR)

    expect(container).toBeInTheDocument()
  })

  test('should render kilometre, when provided', () => {
    render(<AsteroidsListCard {...cardProps} isInLunar={false} diameter={123} isDangerous={true} withButton={true}/>)
    const container = screen.getByTestId(ASTEROIDS_LIST_CARD_TEST_IDS.KILOMETRE)

    expect(container).toBeInTheDocument()
  })

  test('should render diameter, when provided', () => {
    render(<AsteroidsListCard {...cardProps} isInLunar={false} diameter={123} isDangerous={true} withButton={true}/>)
    const container = screen.getByTestId(ASTEROIDS_LIST_CARD_TEST_IDS.DIAMETER)

    expect(container).toHaveTextContent('123')
  })

  test('should render button, when provided', () => {
    render(<AsteroidsListCard {...cardProps} isInLunar={false} diameter={123} isDangerous={true} withButton={true}/>)
    const container = screen.getByTestId(ASTEROIDS_LIST_CARD_TEST_IDS.BUTTON)

    expect(container).toBeInTheDocument()
  })

  test('should render dangerous text, when provided', () => {
    render(<AsteroidsListCard {...cardProps} isInLunar={false} diameter={123} isDangerous={true} withButton={true}/>)
    const container = screen.getByTestId(ASTEROIDS_LIST_CARD_TEST_IDS.IS_DANGER)

    expect(container).toBeInTheDocument()
  })


})

describe('Asteroids list page card rock size', () => {
  test('should render kilometre, when provided', () => {
    render(<AsteroidsListCard {...cardProps} isInLunar={false} diameter={123} isDangerous={true} withButton={true}/>)
    const container = screen.getByTestId(ASTEROIDS_LIST_CARD_TEST_IDS.BIG_ROCK)

    expect(container).toBeInTheDocument()
  })

  test('should render kilometre, when provided', () => {
    render(<AsteroidsListCard {...cardProps} isInLunar={false} diameter={23} isDangerous={true} withButton={true}/>)
    const container = screen.getByTestId(ASTEROIDS_LIST_CARD_TEST_IDS.SMALL_ROCK)

    expect(container).toBeInTheDocument()
  })
})
