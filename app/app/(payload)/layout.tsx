import React from 'react'
import '../(site)/globals.css'

type Args = {
  children: React.ReactNode
}

const Layout = async ({ children }: Args) => (
  <html lang="ru">
    <body>
      {children}
    </body>
  </html>
)

export default Layout
