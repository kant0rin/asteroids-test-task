import type { Meta, StoryObj } from '@storybook/react';


import AsteroidsListCard from './AsteroidsListCard'
import {CardProps} from "./AsteroidsListCard";

const cardProps: CardProps = {
  date: '21 декабря 2012',
  diameter: 123,
  name: 'Asteroid',
  kilometreDistance: 1424123,
  lunarDistance: 12,
  isDangerous: false,
  id: 1233112,
  isInLunar: true,
  withButton: true
};

type Story = StoryObj<typeof AsteroidsListCard>;
const TypographyTemplate: Story = { render: (args) => <AsteroidsListCard {...args} /> };

export const Playground = { ...TypographyTemplate };
Playground.args = cardProps;


export default {
  component: AsteroidsListCard,
  title: 'cards/AsteroidsListCard'
} as Meta<typeof AsteroidsListCard>;
