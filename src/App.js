import React, { Component } from "react";
import Botao from "./components/botao";
import './estilo.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      textoFrase: ''
    };
    
    this.frases = ['A vida trará coisas boas se tiver paciência','Não compense na ira o que lhe falta na razão','Siga os bons e aprenda com eles','O riso é a menor distância entre duas pessoas','Aquele que se importa com o sentimento dos outros, não é um tolo', 'O conhecimento é a única virtude e a ignorância é o único vício'];
  }
    //Math.floor => Para ser um numero inteiro
  quebraBiscoito(){
    let numAleatorio = Math.floor(Math.random() * this.frases.length)
    this.setState({textoFrase:'"' +  this.frases[numAleatorio] + '"'})
  }

  render(){
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito.bind(this)}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

export default App;
