import Rotas from "./src/rotas";
import { InfoProvider } from "./src/contexts/GlobalContext";

export default function App() { // o que estiver dentro do InfoProvider, vai ter acesso as informacoes que estao no InfoProvider
  return (
    <InfoProvider>
      <Rotas />
    </InfoProvider>
  );
}