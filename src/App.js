import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import { useState } from "react";
import Time from "./componentes/Time";

function App() {
  const times = [
    { nome: "Programação", corPrimaria: "#57C278", corSecundaria: "#D9F7E9" },
    { nome: "Front-end", corPrimaria: "#82CFFA", corSecundaria: "#E8F8FF" },
    { nome: "Data Science", corPrimaria: "#A6D157", corSecundaria: "#F0F8E2" },
    { nome: "Devops", corPrimaria: "#E06B69", corSecundaria: "#FDE7E8" },
    { nome: "UX e Design", corPrimaria: "#DB6EBF", corSecundaria: "#FAE9F5" },
    { nome: "Mobile", corPrimaria: "#FFBA05", corSecundaria: "#FFF5D9" },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];
  const [colaboradores, setColaboradores] = useState([]); // Cria o estado colaboradores e a função setColaboradores para atualizar o estado, ou seja, o valor do input
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]); // Adiciona o novo colaborador ao estado colaboradores
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)} // Passa apenas os nomes dos times para o componente Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )} // Filtra os colaboradores que pertencem ao time atual
        />
      ))}
    </div>
  );
}

export default App;
