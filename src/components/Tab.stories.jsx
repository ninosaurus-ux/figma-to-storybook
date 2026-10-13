import { Tab } from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    width: { control: 'select', options: ['Max', 'Icon + X', 'Text + X', 'Hug Icon', 'X', 'Min'] },
    isDisabled: { control: 'boolean' },
  },
};

export const Playground = {
  args: { children: 'Tab', width: 'Max' },
};
