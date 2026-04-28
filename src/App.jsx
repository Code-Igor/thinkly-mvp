import { Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
import TarefaPage from "./paginas/TarefaPage";
import AnotacaoPage from "./paginas/AnotacaoPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TarefaPage />} />
        <Route path="/anotacoes" element={<AnotacaoPage />} />
      </Routes>
    </Layout>
  );
}

export default App;