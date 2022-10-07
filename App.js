import Rotas from "./src/rotas";
import { TemaProvider } from "./src/contexts/TemaContext";
import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import { ProdutosProvider } from "./src/contexts/ProdutosContext";

export default function App() { // o que estiver dentro do InfoProvider, vai ter acesso as informacoes que estao no InfoProvider
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <ProdutosProvider>
          <Rotas />
        </ProdutosProvider>
      </AutenticacaoProvider>
    </TemaProvider>
  );
}