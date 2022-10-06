import { createContext } from 'react';

export const GlobalContext = createContext();

export function InfoProvider () { // tudo que estiver dentro da variavel GoblalContext, vai ter acesso as informacoes que estao no InfoProvider
    return (
        <GlobalContext.Provider> 

        </GlobalContext.Provider>
    )
}