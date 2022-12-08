import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageRemoveIcon from ".";

export default {
  title: "components/molecules/ImageRemoveIcon",
  component: ImageRemoveIcon,
} as ComponentMeta<typeof ImageRemoveIcon>;

const Template: ComponentStory<typeof ImageRemoveIcon> = (args) => (
  <ImageRemoveIcon {...args} />
);

export const ImageWithRemoveIcon = Template.bind({});
ImageWithRemoveIcon.args = {
  imgUrl:
    "https://thumbs.dreamstime.com/b/teamwork-community-logo-design-vector-adoption-social-network-template-156215000.jpg",
};
