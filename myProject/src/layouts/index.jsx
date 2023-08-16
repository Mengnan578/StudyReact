import React from 'react';
import { selectLayout } from "utils/selectLayout"
import BaseLayout from './BaseLayout';
import LoginLayout from './LoginLayout';

export default function Layout(props) {
  const { children,location } = props;
  const layoutMap = { BaseLayout , LoginLayout};
  const Container = layoutMap[selectLayout(location.pathname)];
  return <Container>{children}</Container>;
}
