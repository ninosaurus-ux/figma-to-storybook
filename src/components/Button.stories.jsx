import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    hierarchy: { control: 'select', options: ['Primary', 'Secondary color', 'Link color', 'Link gray', 'Tertiary color', 'Tertiary gray', 'Secondary gray'] },
    size: { control: 'select', options: ['md', 'lg', 'xl', '2xl', 'sm', 'xs'] },
    icon: { control: 'select', options: ['Dot leading', 'Default', 'Only'] },
    isDisabled: { control: 'boolean' },
  },
};

export const Playground = {
  args: { children: 'Button CTA', hierarchy: 'Primary', size: 'md', icon: 'Default' },
};
