import { createContext, useState } from 'react';

export const AutenticacaoContext = createContext();

export function AutenticacaoProvider ( {children} ) { // tudo que estiver dentro da variavel GoblalContext, vai ter acesso as informacoes que estao no InfoProvider
    const [usuario, setUsuario] = useState({})

    function logar(email, senha) {
        if(email === 'usuario@email.com' && senha === 'senha'){
            setUsuario({
                nome: 'Usuario',
                email: email,
                endereco: 'Av. Usuario',
                telefone: '(11) 10101-0101',

            })
            return 'ok'
        }
        else{
            return 'Email ou senha incorretos';
        }
    }

    return (
        <AutenticacaoContext.Provider
        value={{
            usuario,
            logar        
            }}> 
            {children}
        </AutenticacaoContext.Provider>
    )
}