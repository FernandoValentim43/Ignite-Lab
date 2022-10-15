import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Type your text"
  },
  argTypes: {},
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};
