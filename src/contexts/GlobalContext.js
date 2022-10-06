import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export function InfoProvider ( {children} ) { // tudo que estiver dentro da variavel GoblalContext, vai ter acesso as informacoes que estao no InfoProvider
    const valor = 200;
    const [nome, setNome] = useState("andre")

    return (
        <GlobalContext.Provider
        value={{
            valor,
            nome,
            setNome         
            }}> 
            {children}
        </GlobalContext.Provider>
    )
}