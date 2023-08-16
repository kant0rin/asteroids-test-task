import type { Meta, StoryObj } from '@storybook/react';


import AsteroidPageCard from './AsteroidPageCard'
import {AsteroidPageCardProps} from "./AsteroidPageCard";

const cardProps: AsteroidPageCardProps = {
  diameter: 123,
  name: 'Asteroid',
  isDangerous: false,
  id: 1233112,
};

type Story = StoryObj<typeof AsteroidPageCard>;
const TypographyTemplate: Story = { render: (args) => <AsteroidPageCard {...args} /> };

export const Playground = { ...TypographyTemplate };
Playground.args = cardProps;


export default {
  component: AsteroidPageCard,
  title: 'cards/AsteroidsPageCard'
} as Meta<typeof AsteroidPageCard>;
