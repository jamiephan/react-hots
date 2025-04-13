import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Tag, TagType } from "../../lib/components/Tag";
import { R, W, Y, G } from "./Colors";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Tag",
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Passive: Story = {
  args: {
    type: TagType.PASSIVE,
    isQuest: false,
    text: "Passive",
  },
};
export const PassiveQuest: Story = {
  args: {
    type: TagType.PASSIVE,
    isQuest: true,
    text: "Passive",
  },
};
export const Active: Story = {
  args: {
    type: TagType.ACTIVE,
    isQuest: false,
    text: "Active",
  },
};
export const ActiveQuest: Story = {
  args: {
    type: TagType.ACTIVE,
    isQuest: true,
    text: "Active",
  },
};
export const Ability: Story = {
  args: {
    type: TagType.ABILITY,
    isQuest: false,
    text: "Q",
  },
};
export const AbilityQuest: Story = {
  args: {
    type: TagType.ABILITY,
    isQuest: true,
    text: "Q",
  },
};
export const AbilityTrait: Story = {
  args: {
    type: TagType.ABILITY,
    isQuest: false,
    text: "Trait",
  },
};
export const AbilityTraitQuest: Story = {
  args: {
    type: TagType.ABILITY,
    isQuest: true,
    text: "Trait",
  },
};
export const Heoric: Story = {
  args: {
    type: TagType.HEROIC,
    isQuest: false,
    text: "Heroic (R)",
  },
};
export const HeoricQuest: Story = {
  args: {
    type: TagType.HEROIC,
    isQuest: true,
    text: "Heroic (R)",
  },
};
