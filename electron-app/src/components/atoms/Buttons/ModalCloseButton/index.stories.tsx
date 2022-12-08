import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalCloseButton from ".";

export default {
  title: "components/atoms/Buttons/ModalCloseButton",
  component: ModalCloseButton,
} as ComponentMeta<typeof ModalCloseButton>;

const Template: ComponentStory<typeof ModalCloseButton> = (args) => (
  <ModalCloseButton {...args} />
);

export const Button = Template.bind({});
