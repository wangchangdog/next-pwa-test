'use client'

import { NextUIProvider } from '@nextui-org/react'

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <NextUIProvider>
    {children}
  </NextUIProvider>
);
