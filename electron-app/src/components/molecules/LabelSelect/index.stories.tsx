import { ComponentStory, ComponentMeta } from "@storybook/react";

import LabelSelect from ".";

export default {
  title: "components/molecules/LabelSelect",
  component: LabelSelect,
} as ComponentMeta<typeof LabelSelect>;

const Template: ComponentStory<typeof LabelSelect> = (args) => (
  <LabelSelect {...args} />
);

export const InputWithLabel = Template.bind({});

InputWithLabel.args = {
  labelText: "Label Text",
  val: {
    selectedValue: "a",
    options: [
      { label: "Hello", value: "a" },
      { label: "World", value: "b" },
    ],
  },
};
