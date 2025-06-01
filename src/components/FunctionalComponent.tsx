interface Props {
  nome: String
  idade: number
  children: React.ReactNode
}

function FunctionalComponent({ nome, idade, children }: Props) {
  return (<>
    <h1>Functional Component</h1>
    <h2>Olá {nome}</h2>
    <h2>{nome} tem {idade} anos de idade</h2>
    <div className="children">
      {children}
    </div>
  </>)
}

export default FunctionalComponent;
