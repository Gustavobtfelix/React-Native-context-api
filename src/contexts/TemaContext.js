import { createContext, useState } from 'react';

export const TemaContext = createContext();

export function TemaProvider ( {children} ) { // tudo que estiver dentro da variavel GoblalContext, vai ter acesso as informacoes que estao no InfoProvider
    const [temaAtual, setTemaAtual] = useState("escuro")

    return (
        <TemaContext.Provider
        value={{
            temaAtual,
            setTemaAtual        
            }}> 
            {children}
        </TemaContext.Provider>
    )
}