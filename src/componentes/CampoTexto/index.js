import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (evento) => {
    /* função chamada sempre que o usuário digita algo*/
    props.aoAlterado(evento.target.value); // Chama a função aoAlterado passada como prop, passando o valor do input
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
