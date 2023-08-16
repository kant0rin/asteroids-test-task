import type { Meta, StoryObj } from '@storybook/react';


import ApproachCard from "./ApproachCard";
import {ApproachCardProps} from "./ApproachCard";

const cardProps: ApproachCardProps = {
  date: "2 июн. 1900 г., 01:27:31",
  distance: 6663848,
  velocity: 31,
  orbit: "Merc"
};

type Story = StoryObj<typeof ApproachCard>;
const TypographyTemplate: Story = { render: (args) => <ApproachCard {...args} /> };

export const Playground = { ...TypographyTemplate };
Playground.args = cardProps;


export default {
  component: ApproachCard,
  title: 'cards/ApproachCard'
} as Meta<typeof ApproachCard>;
