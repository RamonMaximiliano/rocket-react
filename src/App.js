import React, { useEffect, useState } from "react";
import Card from "./components/Card.js"

function App() {

  //um state recebe o estado em si que é o primeiro parametro, e a função que vai alterar o valor dele, que é o segundo parametro
  //a função que atualiza o estado por padrão começa com "set"
  //entre o parenteses da função é possivel colocar um default value para ela começar
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' })

  //USE-STATE
  // "useState" é um hook (useEffect é outro exemplo), geralmente começam com "use" que são funções que permitem ligar e conectar os recursos de estado dos componentes
  // Hooks foram criados para não mais usar classes no desenv, e sim usar functions 

  function handleItem() {
    let newItem = ''
    if(itemName == ''){
      window.alert("Type something!")
    } else {
    newItem = {
      name: itemName,
      id: items.length + 1
    }
    setItems(prevState => [...prevState, newItem]);
    document.getElementById("textInput").value = ''
  }
    //was not able to understand the below property being sent, check arrow functions and try to make normal function on the below

  };

  function clearList(){
    setItems([])
  }

  //USE-EFFECT
  // "useEffect" ele é renderizado assim que a tela é carregada.
  // se o array dele é deixado vazio então ele é executado somente uma vez, se o array tiver states, então o useEffect é acionado cada vez que o state muda

  useEffect(() => {

       fetch("https://api.github.com/users/ramonmaximiliano")
      .then(function (result) {
        return result.json()
      })

      .then(function (result) {
        setUser(
          {
            name: result.login,
            avatar: result.avatar_url
          }
        )
      })

      .catch(function () {
        window.alert("You are offline!")
      })

  }, [])

  let indexOfItem = 1

  function deleteItem(event){
    indexOfItem = 0
    console.log("Hello")
    let idItem = event.target.innerHTML
    setItems(items.filter(function(elementOfitems){
        console.log(elementOfitems.id)
        console.log(idItem)
        console.log(items)

        return elementOfitems.id != idItem
      })
    )
  }

  return (
    <div className="tittle-div">
      <div className="imagetittle">
        <h1 className="MainTittle">{user.name}</h1>
        <img className="profileImage" src={user.avatar} alt="Waiting..."></img>
      </div>
      <input id="textInput" type="text" placeholder="Type your item" onChange={e => setItemName(e.target.value)}></input>
      <button onClick={handleItem}>Add</button>

      {
        items.map(item => <Card name={item.name} /* id={item.id} */ id={indexOfItem++} onclick={deleteItem}/>)

      }

      <div>
      <button id="clearButton" onClick={clearList}>Clear</button>
      <footer className="footer">Created by Ramon</footer>
      </div>

    </div>
  );
}

export default App;

// Adicionar button para excluir o item (ficou o numero como button)
// Não deixar dois elementos com o mesmo ID, visualmente esta ok, o problema é o ID no array "items"
// -- Não deixar adicionar itens vazios
// -- Adicionar button de esvaziar lista
// -- Adicionar footer criado por Ramon
// Quando press enter add item
// -- Quando adicionar item, esvaziar o input box
// Ajustar cores e interface
// Re-assistir video Diego (React)
// Fazer o deploy com link
// -- usar o useEffect para pegar foto e nome da API do github:  https://api.github.com/users/ramonmaximiliano
// -- Criar chave unica para cada component => Consegui colocar um ID baseado no index
