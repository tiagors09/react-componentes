import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'

import styles from './components/FunctionalComponent.module.css'

const divStyle: React.CSSProperties = {
  width: '100%',
}

const aluno: React.CSSProperties = {
  margin: '10px',
  backgroundColor: 'white',
  color: 'black',
  width: '100%',
}

let isLoggedIn: boolean = false
let alunos = [
  {
    id: 1,
    nome: "Ana Souza",
    idade: 20,
    curso: "Engenharia",
    matriculado: true
  },
  {
    id: 2,
    nome: "Carlos Lima",
    idade: 22,
    curso: "Direito",
    matriculado: false
  },
  {
    id: 3,
    nome: "Beatriz Silva",
    idade: 19,
    curso: "Medicina",
    matriculado: true
  },
  {
    id: 4,
    nome: "Diego Ramos",
    idade: 23,
    curso: "Administração",
    matriculado: true
  },
  {
    id: 5,
    nome: "Fernanda Oliveira",
    idade: 21,
    curso: "Arquitetura",
    matriculado: false
  }
]

function App() {
  return (
    <>
      <FunctionalComponent nome={"Tiago"} idade={24}>
        <div className={styles.children} style={divStyle}>
          Olá
        </div>
      </FunctionalComponent >
      <ClassComponent nome={"Tiago"} />

      {
        isLoggedIn ?
          (
            <div>
              Logado
            </div>
          ) :
          (
            <div>
              Não logado
            </div>
          )
      }

      {isLoggedIn || <div>Olá senhor!!</div>}

      {
        alunos.map(({ id, nome, idade, curso, matriculado }) => <div key={id} style={aluno}>
          <div>Nome: {nome}</div>
          <div>Idade: {idade}</div>
          <div>Curso: {curso}</div>
          {matriculado ? <div>Está matriculado</div> : <div>Não está matriculado</div>}
        </div>)
      }
    </>
  )
}

export default App
