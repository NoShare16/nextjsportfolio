import React from 'react'
import "@styles/globals.css"
import Navbar from '@components/Navbar'


const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <header>
              <Navbar/>
            </header>
          
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout