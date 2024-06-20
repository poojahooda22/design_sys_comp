import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@/components/ui/button/Index';


export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    intent: {
      options: ['primary', 'secondary', 'dr', '', ''],
      control: { type: 'radio' }
    },
    size: {
      options: [ 'small', 'medium', 'large', 'xl'],
      control: { type: 'radio' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    children: {
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof Button>;



const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary',
  children: 'Primary Button',
};
