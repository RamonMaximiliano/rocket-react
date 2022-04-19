import React, {useState} from "react";
import Card from "./components/Card.js"

function App() {

  //um state recebe o estado em si que é o primeiro elemento, e a função que vai alterar o valor dele
  //a função que atualiza o estado por padrão começa com "set"
  //entre o parenteses da função é possivel colocar um default value para ela começar
  const [studentName, setItem] = useState();

  return (
    <div className="tittle-div">
{/*       estado acima sendo utilizado
 */}      <h1 className="MainTittle">React App {studentName}</h1>
      <input type="text" placeholder="Type your item" onChange={e => setItem(e.target.value)}></input>
      <button>Add</button>

      <Card name="Ramon" value="200"/>
      <Card name="John" value="150" />
      <Card name="Mark" value="100" />

    </div>
  );
}

export default App;


/* onchange={e =>showItem(e.target.value) }
 */