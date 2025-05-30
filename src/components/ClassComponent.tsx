import React from "react";

interface Props {
  nome: String
}

interface State {
  contador: number
}

class ClassComponent extends React.Component<Props, State> {
  state = {
    contador: 0,
  };

  increment() {
    this.setState((state) => ({
      contador: state.contador + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>Componente de classe</h1>
        <h2>{this.props.nome}</h2>
        <h3 onClick={() => this.increment()}>
          {this.state.contador}
        </h3 >
      </>
    );
  }
}

export default ClassComponent;
