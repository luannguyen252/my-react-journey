import React from "react";
import Hello, { IsLoading } from "../components/Hello";

export default {
  title: "Components/Hello",
  component: Hello,
};

const Template = (args) => <Hello {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  name: "Luan Nguyen",
  isGuest: false,
};

export const Guest = Template.bind({});
Guest.args = {
  name: "Guest",
  isGuest: true,
};

export function NotLoading() {
  return <IsLoading />;
}

export function Loading() {
  return <IsLoading loading={true} />;
}
