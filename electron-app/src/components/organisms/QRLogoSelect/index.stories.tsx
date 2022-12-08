import { ComponentStory, ComponentMeta } from "@storybook/react";

import QRLogoSelect from ".";

export default {
  title: "components/organisms/QRLogoSelect",
  component: QRLogoSelect,
} as ComponentMeta<typeof QRLogoSelect>;

const Template: ComponentStory<typeof QRLogoSelect> = (args) => (
  <QRLogoSelect {...args} />
);

export const QRLogoSelectComp = Template.bind({});

QRLogoSelectComp.args = {
  onQRLogoSelect: () => {},
};

// SelectInput.args = {

// };
