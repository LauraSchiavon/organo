import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState(""); // Cria o estado nome e a função setNome para atualizar o estado, ou seja, o valor do input
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    //função que será chamada quando o form for enviado
    evento.preventDefault(); //previne o comportamento padrão do form, no caso, o refresh da página
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    }); //chama a função aoColaboradorCadastrado passada como prop, passando o objeto colaborador
    setNome("");
    setCargo("");
    setImagem("");
    setTime(""); // limpa as informações do formulário ao clicar no botão criar card
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo} //cria o estado cargo e a função setCargo para atualizar o estado, ou seja, o valor do input
          aoAlterado={(valor) => setCargo(valor)} // Chama a função aoAlterado passada como prop, passando o valor do input
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao> Criar Card </Botao>
      </form>
    </section>
  );
};

export default Formulario;
