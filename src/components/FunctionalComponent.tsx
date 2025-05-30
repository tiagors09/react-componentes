interface Props {
  nome: String
  idade: number
}

function FunctionalComponent({ nome, idade }: Props) {
  return (<>
    <h1>Functional Component</h1>
    <h2>Olá {nome}</h2>
    <h2>{nome} tem {idade} anos de idade</h2>
  </>)
}

export default FunctionalComponent;
