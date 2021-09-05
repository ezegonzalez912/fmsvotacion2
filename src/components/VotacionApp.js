import React from 'react'
import { CompProvider } from './Contexts/CompContext'
import { DataProvider } from './Contexts/DataContext'
import { FormatoProvider } from './Contexts/FormatoContext'
import { TotalProvider } from './Contexts/TotalContext'
import { MenuVotacion } from './Votacion/menuVotacion/MenuVotacion'

export const VotacionApp = ({ventana, setGreenScreen}) => {
  
  return (
    <DataProvider>
      <FormatoProvider>
          <CompProvider>
            <TotalProvider>
              <MenuVotacion ventana={ventana} setGreenScreen={setGreenScreen}/>
            </TotalProvider>
          </CompProvider>
      </FormatoProvider>
    </DataProvider>
  )
}