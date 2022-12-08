import { ComponentStory, ComponentMeta } from "@storybook/react";

import UploadQRLogoInput from ".";

export default {
  title: "components/atoms/Inputs/UploadQRLogoInput",
  component: UploadQRLogoInput,
} as ComponentMeta<typeof UploadQRLogoInput>;

const Template: ComponentStory<typeof UploadQRLogoInput> = (args) => (
  <UploadQRLogoInput {...args} />
);

export const LogoUpload = Template.bind({});
// FolderInput.args = {
//   value: "/User/folder/path",
// };
