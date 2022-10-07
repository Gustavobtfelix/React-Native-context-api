import { createContext, useState } from 'react';

export const ProdutosContext = createContext({});

export function ProdutosProvider ( {children} ) { // tudo que estiver dentro da variavel GoblalContext, vai ter acesso as informacoes que estao no InfoProvider
    const [quantidade, setQuantidade] = useState(0);
    const [carrinho, setCarrinho] = useState([]);
    const [ultimosVistos, setultimosVistos] = useState([]);

    function viuProduto(produto){
        setQuantidade(quantidade+1);

        let novoCarrinho = carrinho
        novoCarrinho.push(produto);
        setCarrinho(novoCarrinho);

        let novoUltimosVistos = new Set(ultimosVistos)
        novoUltimosVistos.add(produto); // dentro do set, nao pode ter valores repetidos

        /*novo ultimos vistos é um objeto
            {
                {},
                {}
            }
        */
       setultimosVistos([...novoUltimosVistos]) // transforma o objeto em array
    }



    return (
        <ProdutosContext.Provider
        value={{
            quantidade,
            carrinho,
            ultimosVistos,
            viuProduto                    
            }}> 
            {children}
        </ProdutosContext.Provider>
    )
}