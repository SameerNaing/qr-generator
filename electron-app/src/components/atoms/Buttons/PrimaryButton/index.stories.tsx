import { ComponentStory, ComponentMeta } from "@storybook/react";

import PrimaryButton from ".";

export default {
  title: "components/atoms/Buttons/PrimaryButton",
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Button = Template.bind({});
