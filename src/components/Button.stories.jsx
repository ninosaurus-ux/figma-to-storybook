import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    hierarchy: { control: 'select', options: ['Default'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    isDisabled: { control: 'boolean' },
  },
};

export const Playground = {
  args: { children: 'Button', hierarchy: 'Default', size: 'md' },
};
