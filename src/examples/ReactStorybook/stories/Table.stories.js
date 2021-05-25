import React from "react";
import Table from "../components/Table";
import { withKnobs, object } from "@storybook/addon-knobs";

export default {
  title: "Components/Table",
  component: Table,
  decorators: [withKnobs],
};

const data = [
  {
    chapter: "Chapter 1",
    content: "Research, Define, and Priority",
  },
  {
    chapter: "Chapter 2",
    content: "Consistency, Reusability, and Scalability",
  },
  { chapter: "Chapter 3", content: "Principles: Why are they so important?" },
  {
    chapter: "Chapter 4",
    content: "Design Tool: How to choose the right tool?",
  },
  { chapter: "Chapter 5", content: "Design System for Branding" },
  {
    chapter: "Chapter 6",
    content: "Design System for Application and Website",
  },
  { chapter: "Chapter 7", content: "Design Tokens: Heart of Digital Product" },
  {
    chapter: "Chapter 8",
    content: "Step-by-Step Guide: Building a Design System",
  },
  {
    chapter: "Chapter 9",
    content: "Bonus: Design System for Data Visualization",
  },
  { chapter: "Chapter 10", content: "Measuring The Value Design Systems" },
  { chapter: "Chapter 11", content: "The Future of Design Systems" },
  { chapter: "Chapter 12", content: "Join to Design System community" },
];

export function HaveData() {
  return <Table data={object("data", data)} />;
}

export function EmptyData() {
  return <Table />;
}
