import React, { useState } from "react";
import Card from "./components/Card.js"

function App() {

  //um state recebe o estado em si que é o primeiro parametro, e a função que vai alterar o valor dele, que é o segundo parametro
  //a função que atualiza o estado por padrão começa com "set"
  //entre o parenteses da função é possivel colocar um default value para ela começar
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);

  console.log(`check this ${items}`)

  function handleItem() {
    const newItem = {
      name: itemName,
    }
    console.log(newItem)
    console.log(itemName)


    //was not able to understand the below property being sent, check arrow functions and try to make normal function on the below
    setItems(prevState => [...prevState,newItem]);
  };


  return (
    <div className="tittle-div">
      <h1 className="MainTittle">React App</h1>
      <input type="text" placeholder="Type your item" onChange={e => setItemName(e.target.value)}></input>
      <button onClick={handleItem}>Add</button>

      {
        items.map(item => <Card name={item.name} />)
      }

    </div>
  );
}

export default App;
