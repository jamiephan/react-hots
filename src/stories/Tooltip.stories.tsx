import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Tooltip } from "../../lib/components/Tooltip";
import { R, W, Y, G } from "./Colors";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Tooltip",
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text", description: "An optional title in tooltip" },
    subTitles: {
      control: "object",
      description: "An optional array of subtitles in tooltip",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NotEnoughGemsText: Story = {
  args: {
    children: (
      <>
        <div>Not enough Gems</div>
        <div>Click here to purchase more Gems.</div>
      </>
    ),
  },
};

export const RankedPlacementText: Story = {
  args: {
    title: "Placement",
    children: (
      <>
        <div>
          Your placement games determine your starting rank for the season.
        </div>
        <div style={{ color: "#8498e3" }}>3 more games to be placed</div>
      </>
    ),
  },
};

export const OrpheaShadowWaltz: Story = {
  args: {
    title: "Shadow Waltz",
    subTitles: ["Mana: 35", "Cooldown: 5 seconds"],
    children: (
      <>
        <div>
          After <W>0.5</W> seconds, deal <W>165</W> damage to enemies in a line.
        </div>
        <div>&#xfeff;</div>
        <div>
          Hitting a Hero with Shadow Waltz sets its cooldown to <W>2</W>{" "}
          seconds, refunds <W>35</W> Mana, and causes Orphea to dash a short
          distance upon moving.
        </div>
      </>
    ),
  },
};

export const WhitemaneDesperatePlea: Story = {
  args: {
    title: "Desperate Plea",
    subTitles: ["Mana: 40"],
    children: (
      <>
        <div>
          Heal an allied Hero for <W>140</W> and gain <R>Desperation</R> for{" "}
          <W>4</W> seconds.
        </div>
        <div>&#xfeff;</div>
        <div>
          <R>Desperation</R> increases Desperate Plea's Mana cost by <W>40</W>,
          and stacks up to <W>3</W> times.
        </div>
        <div>&#xfeff;</div>
        <div>
          <Y>Current Mana Cost:</Y> <W>40</W>
        </div>
      </>
    ),
  },
};

export const ZagaraNydusNetwork: Story = {
  args: {
    title: "Nydus Network",
    subTitles: ["Mana: 50", "Charge Cooldown: 120 seconds"],
    children: (
      <>
        <div>
          Summon a Nydus Worm on Creep anywhere that Zagara has vision. Zagara
          can enter a Nydus Worm and travel to any other Nydus Worm by
          right-clicking near it. While inside a Nydus Worm, Zagara regenerates{" "}
          <W>10%</W> Health and Mana per second.
        </div>
        <div>&#xfeff;</div>
        <div>
          Stores up to <W>2</W> charges. Maximum of <W>4</W> Nydus Worms at a
          time.
        </div>
        <div>&#xfeff;</div>
        <div>
          <G>Passive:</G> Creep spreads <W>15%</W> farther.
        </div>
        <div>
          <G>Passive:</G> While on Creep, each Basic Attack reduces all of
          Zagara's cooldowns by <W>0.4</W> seconds.
        </div>
      </>
    ),
  },
};
