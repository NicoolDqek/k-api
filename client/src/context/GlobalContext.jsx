import React from 'react'
import { createContext } from 'react'



export const ContextGlobal=createContext()
function GlobalContext({children}) {




  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default GlobalContext
