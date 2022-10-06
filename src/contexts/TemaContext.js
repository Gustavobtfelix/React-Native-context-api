import { createContext, useState } from 'react';
import { escuro, claro } from '../estilosGlobais';

export const TemaContext = createContext();

const temas = {
    'escuro': escuro,
    'claro': claro,
}

export function TemaProvider ( {children} ) { // tudo que estiver dentro da variavel GoblalContext, vai ter acesso as informacoes que estao no InfoProvider
    const [temaAtual, setTemaAtual] = useState("escuro")

    return (
        <TemaContext.Provider
        value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual]    // variavel que procura valores na biblioteca temas com o valor do temaAtual
            }}> 
            {children}
        </TemaContext.Provider>
    )
}