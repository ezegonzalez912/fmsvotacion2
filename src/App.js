import React from 'react'
import { CompProvider } from './components/Contexts/CompContext'
import { DataProvider } from './components/Contexts/DataContext'
import { FormatoProvider } from './components/Contexts/FormatoContext'
import { TotalProvider } from './components/Contexts/TotalContext'
import { MenuVotacion } from './components/Votacion/menuVotacion/MenuVotacion'

export const App = () => {
  return (
    <DataProvider>
      <FormatoProvider>
          <CompProvider>
            <TotalProvider>
              <MenuVotacion />
            </TotalProvider>
          </CompProvider>
      </FormatoProvider>
    </DataProvider>
  )
}
