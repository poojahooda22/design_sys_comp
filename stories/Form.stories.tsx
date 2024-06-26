import type { Meta, StoryObj } from "@storybook/react";

import FormDemo from "@/components/ui/form/Form"
import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

const meta: Meta<typeof FormDemo> = {
    component: FormDemo,
    title: 'Form'
};

export default meta;

type Story = StoryObj<typeof meta>;

export const  Base: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);

        const submitBtn = canvas.getByText('Post question');

        await expect(submitBtn).toBeInTheDocument();
    }
};

