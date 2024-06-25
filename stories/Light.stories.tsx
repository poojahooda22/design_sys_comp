import type { Meta, StoryObj } from "@storybook/react";

import Light from "@/components/ui/light/light"

 const meta: Meta<typeof Light> = {
    component: Light,
    title: "Light",
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
}