import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import React from "react";
import "../styles/style.scss";

export type IPageProps = {
  Layout: React.Component;
  layoutProps: {};
};

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType & IPageProps;
  pageProps: {};
}) {
  const Layout = Component.Layout ?? React.Fragment;
  const layoutProps = Component.layoutProps ?? {};
  return <Component {...pageProps} />;
}

export default MyApp;
