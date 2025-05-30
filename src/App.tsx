import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  return (
    <>
      <FunctionalComponent nome={"Tiago"} idade={24} />
      <ClassComponent nome={"Tiago"} />
    </>
  )
}

export default App
