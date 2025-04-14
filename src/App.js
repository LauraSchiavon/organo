import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import { useState } from "react";
import Time from "./componentes/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]); // Cria o estado colaboradores e a função setColaboradores para atualizar o estado, ou seja, o valor do input
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]); // Adiciona o novo colaborador ao estado colaboradores
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nome="Programação" />
      <Time nome="Front-end" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
