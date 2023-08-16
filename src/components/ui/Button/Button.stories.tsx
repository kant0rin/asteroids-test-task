import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button'
import {ButtonProps} from "./Button";

const buttonProps: ButtonProps = {
  children: 'Отправить',
  isInOrder: false,
  size: 'big',
  onClick: () => {}
};

type Story = StoryObj<typeof Button>;
const TypographyTemplate: Story = { render: (args) => <Button {...args} /> };

export const Playground = { ...TypographyTemplate };
Playground.args = buttonProps;


export default {
  component: Button,
  title: 'ui/Button'
} as Meta<typeof Button>;
