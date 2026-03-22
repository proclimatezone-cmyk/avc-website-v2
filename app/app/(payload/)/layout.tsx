import { RootLayout as PayloadRootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import './globals.css'

type Args = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Args) => (
  <PayloadRootLayout>
    {children}
  </PayloadRootLayout>
)

export default RootLayout
