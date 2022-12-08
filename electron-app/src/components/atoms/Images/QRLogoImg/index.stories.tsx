import { ComponentStory, ComponentMeta } from "@storybook/react";

import QRLogoImg from ".";

export default {
  title: "components/atoms/Images/QRLogoImg",
  component: QRLogoImg,
} as ComponentMeta<typeof QRLogoImg>;

const Template: ComponentStory<typeof QRLogoImg> = (args) => (
  <QRLogoImg {...args} />
);

export const QRLogo = Template.bind({});
QRLogo.args = {
  imgUrl:
    "https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=2000",
};
