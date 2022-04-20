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

  console.log(`check this ${items.length}`)

  function handleItem() {
    const newItem = {
      name: itemName,
      id: items.length + 1
    }
    console.log(newItem)
    console.log(itemName)


    //was not able to understand the below property being sent, check arrow functions and try to make normal function on the below
    setItems(prevState => [...prevState, newItem]);
  };

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


  return (
    <div className="tittle-div">
      <div class="imagetittle">
        <h1 className="MainTittle">{user.name}</h1>
        <img class="profileImage" src={user.avatar} alt="Waiting..."></img>
      </div>
      <input type="text" placeholder="Type your item" onChange={e => setItemName(e.target.value)}></input>
      <button onClick={handleItem}>Add</button>

      {
        items.map(item => <Card name={item.name} id={item.id} />)
      }

    </div>
  );
}

export default App;


// Adicionar button para excluir o item
// Não deixar adicionar itens vazios
// Adicionar button de esvaziar lista
// Adicionar footer criado por Ramon
// Quando adicionar item, esvaziar o input box
// Ajustar cores e interface
// Re-assistir video Diego (React)
// Fazer o deploy com link
// -- usar o useEffect para pegar foto e nome da API do github:  https://api.github.com/users/ramonmaximiliano
// -- Criar chave unica para cada component => Consegui colocar um ID baseado no index




