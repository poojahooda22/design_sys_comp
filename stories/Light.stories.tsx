import type { Meta, StoryObj } from "@storybook/react";

import Light from "@/components/ui/light/light"

 const meta: Meta<typeof Light> = {
    component: Light,
    title: "Light",
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {type: 'select'},
            options: ['red', 'yellow', 'green']
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        variant: 'red'
    },
}

export const Yellow: Story = {
    args: {
        variant: 'yellow'
    },
}
export const Green: Story = {
    args: {
        variant: 'green'
    },
}

export const Grouped: Story = {
    render: (args) => 
    <div style={{width: 'max-content', padding: '12px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: 10, border: '1px solid black'}}>
        <Light variant="red" />  
        <Light variant="yellow" />
        <Light variant="green" />
    </div>
}