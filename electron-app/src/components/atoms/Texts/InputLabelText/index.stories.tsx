import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputLabelText from ".";

export default {
  title: "components/atoms/Texts/InputLabelText",
  component: InputLabelText,
} as ComponentMeta<typeof InputLabelText>;

const Template: ComponentStory<typeof InputLabelText> = (args) => (
  <InputLabelText {...args} />
);

export const InputLabel = Template.bind({});
InputLabel.args = {
  labelText: "Label Text for Input",
};
