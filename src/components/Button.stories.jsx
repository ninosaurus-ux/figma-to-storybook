import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    tone: { control: 'select', options: ['primary', 'secondary'] },
    isDisabled: { control: 'boolean' },
  },
};

export const Primary = {
  args: { children: 'Tombol' },
};

export const Secondary = {
  args: { tone: 'secondary', children: 'Tombol' },
};

export const Disabled = {
  args: { children: 'Tombol', isDisabled: true },
};