import { createContext, useState, useEffect } from 'react';
import { pegarProdutos, salvarProduto } from '../servicos/requisicoes/produtos';

export const ProdutosContext = createContext({});

export function ProdutosProvider ( {children} ) { // tudo que estiver dentro da variavel GoblalContext, vai ter acesso as informacoes que estao no InfoProvider
    const [quantidade, setQuantidade] = useState(0);
    const [carrinho, setCarrinho] = useState([]);
    const [ultimosVistos, setultimosVistos] = useState([]);
    const [precoTotal, setPrecoTotal] = useState(0);

    useEffect( async () => {
        const resultado = await pegarProdutos();
        setCarrinho(resultado);
        setQuantidade(resultado.length);
      }, [])

    async function viuProduto(produto) {
        setQuantidade(quantidade+1);
        let novoPrecoTotal = precoTotal + produto.preco;
        setPrecoTotal(novoPrecoTotal);
        const produtoSalvo = await salvarProduto(produto)


        let novoCarrinho = carrinho
        novoCarrinho.push(produtoSalvo);
        setCarrinho(novoCarrinho);

        let novoUltimosVistos = new Set(ultimosVistos)
        novoUltimosVistos.add(produto); // dentro do set, nao pode ter valores repetidos
       setultimosVistos([...novoUltimosVistos])
    
        
    }

    async function finalizarCompra() {
        // para cada item nos ultimos vistos, apagar do banco de dados usando o removerProduto
        try {
            carrinho.forEach(async produto => {
                await removerProduto(produto);
            })
            setQuantidade(0);
            setPrecoTotal(0);
            setCarrinho([]);
            return 'Compra finalizada com sucesso!';
        }
        catch(erro) {
            return 'Erro ao finalizar a compra, tente novamente!';
        }
    }



    return (
        <ProdutosContext.Provider
        value={{
            quantidade,
            precoTotal,
            carrinho,
            ultimosVistos,
            viuProduto,
            finalizarCompra                    
            }}> 
            {children}
        </ProdutosContext.Provider>
    )
}