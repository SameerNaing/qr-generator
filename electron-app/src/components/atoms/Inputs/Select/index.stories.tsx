import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from ".";

export default {
  title: "components/atoms/Inputs/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectInput = Template.bind({});

SelectInput.args = {
  val: {
    selectedValue: "a",
    options: [
      { label: "Hello", value: "b" },
      { label: "World", value: "c" },
    ],
  },
};
