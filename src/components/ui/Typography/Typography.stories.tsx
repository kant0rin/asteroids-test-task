import type { Meta, StoryObj } from '@storybook/react';

import type { TypographyProps, TypographyTag } from './Typography';
import { Typography } from './Typography';

const typographiesProps: TypographyProps[] = [
  {
    children: 'Ближайшие подлёты астероидов',
    variant: 'h-1',
    tag: 'h1'
  },
  {
    children: '12 сент 2023',
    variant: 'h-2',
    tag: 'h2'
  },
  {
    children: 'Корзина',
    variant: 'h-3',
    tag: 'h3'
  },
  {
    children: 'Ближайшие подлёты астероидов',
    variant: 'h-1',
    tag: 'h1'
  },
  {
    children: 'Отправить',
    variant: 'title-normal',
    tag: "p"
  },
  {
    children: 'в лунных орбитах',
    variant: 'title-underlined',
    tag: 'p'
  },
  {
    children: 'в километрах',
    variant: 'title-bold',
    tag: 'p'
  },
  {
    children: '2021 FQ',
    variant: 'title-bold-underlined',
    tag: 'p'
  },
  {
    children: '85 М',
    variant: 'title-micro',
    tag: 'span',
  },
  {
    children: 'Опасен',
    variant: 'title-small',
    tag: 'span'
  },
  {
    children: 'Заказать',
    variant: 'button-spaced',
    tag: 'span'
  }
]

const typographyProps: TypographyProps = {
  children: 'Армагедон',
  tag: 'h1',
  variant: 'h-1'
};

type Story = StoryObj<typeof Typography>;
const TypographyTemplate: Story = { render: (args) => <Typography {...args} /> };

export const Playground = { ...TypographyTemplate };
Playground.args = typographyProps;

export const AllTypographies = () => (
  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    {typographiesProps.map((typographyProps) => (
      <Typography key={typographyProps.variant} {...typographyProps} />
    ))}
  </div>
);

export default {
  component: Typography,
  title: 'ui/Typography'
} as Meta<typeof Typography>;
