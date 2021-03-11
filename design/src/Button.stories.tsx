import React, { Fragment, useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Strawberry/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'i am a button'
};

export const Cool = Template.bind({});
Cool.args = {
  children: 'i am a cool button',
  isCool: true,
}

type CounterChildren = (args: { count: number; tick: () => void }) => JSX.Element;
function Counter({ children }: { children: CounterChildren }) {
  const [count, setCount] = useState(0);
  return children({ count, tick: () => setCount(s => s + 1) })
}

export const Counting: Story<ButtonProps> = (args) => <Counter>{({ count, tick }) => <Fragment><Button {...args} onClick={tick} />{count}</Fragment>}</Counter>;
Counting.args = {
  children: 'Click to count'
}
