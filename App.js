import Rotas from "./src/rotas";
import { TemaProvider } from "./src/contexts/TemaContext";

export default function App() { // o que estiver dentro do InfoProvider, vai ter acesso as informacoes que estao no InfoProvider
  return (
    <TemaProvider>
      <Rotas />
    </TemaProvider>
  );
}