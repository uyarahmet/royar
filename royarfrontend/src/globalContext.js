import React, {useState, createContext} from 'react'
export const GlobalContext=createContext()

export function GlobalProvider(props){
  const [token, setToken] = useState();
  return (
    <GlobalContext.Provider value ={{tokenValue: [token, setToken],}}>{props.children}</GlobalContext.Provider>
)
}
