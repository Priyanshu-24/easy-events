"use client";

import { NextUIProvider } from "@nextui-org/react";

const UILibProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default UILibProvider;
