import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    tone: { control: 'select', options: ['primary', 'secondary'] },
    isDisabled: { control: 'boolean' },
  },
};

export const Primary = { args: { children: 'Button' } };
export const Secondary = { args: { tone: 'secondary', children: 'Button' } };
export const Disabled = { args: { children: 'Button', isDisabled: true } };
