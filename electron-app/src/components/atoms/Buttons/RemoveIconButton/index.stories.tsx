import { ComponentStory, ComponentMeta } from "@storybook/react";

import RemoveIconButton from ".";

export default {
  title: "components/atoms/Buttons/RemoveIconButton",
  component: RemoveIconButton,
} as ComponentMeta<typeof RemoveIconButton>;

const Template: ComponentStory<typeof RemoveIconButton> = (args) => (
  <RemoveIconButton {...args} />
);

export const Button = Template.bind({});
