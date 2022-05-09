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

    //pegando a lista de items, caso não exista nenhum item, assignando o index como 0, caso existam dai ele pega o id do ultimo item da lista e adiciona 1, assim nunca haverá 2 items com o mesmo ID.


    let itemsList2 = document.querySelectorAll("small")
    let itemIndex = Array.from(itemsList2)
    let itemIndexLength = 0

    if (itemIndex.length <= 0) {
      itemIndexLength = 0
    } else {
      itemIndexLength = itemIndex[itemIndex.length - 1].innerText
    }
    let endId = parseInt(itemIndexLength) + 1

    let newItem = ''
    if (itemName == '') {
      window.alert("Type something!")
    } else {
      newItem = {
        name: itemName,
        id: endId
      }

      setItems(prevState => [...prevState, newItem]);
      document.getElementById("textInput").value = ''
    }


    /*   let itemsList2 = document.querySelectorAll("small")
      // Used the Array.from() method to convert a nodelist to an array  
      let itemIndex = Array.from(itemsList2)
      let itemIndexLength = itemIndex[itemIndex.length-1].innerText
      console.log(itemIndexLength) */


    //was not able to understand the below property being sent, check arrow functions and try to make normal function on the below
  };

  //Test sfe

  function clearList() {
    setItems([])
  }


  const testItem = function deleteItem(id) {
    console.log(id)

    // Eu estava tentando deletar os items da lista com o AddEvent Listener, porém em react como cada item da lista é um component, fica muito dificil pois o componente é montado renderizado e desmontado, conforme link abaixo:

    /*   https://www.pluralsight.com/guides/event-listeners-in-react-components
     */


    //Usar o parametro de ID abaixo conforme a react to do do Traversy media é mais facil de fazer, passa o id do component como parametro na function, e ela fica disponivel na função delete para usar como identifier para atualizar a lista.


    let deletedList = items.filter(function (item) {
      return item.id != id
    })

    setItems(deletedList)
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
      <div className="imagetittle">
        <h1 className="MainTittle">{user.name}</h1>
        <img className="profileImage" src={user.avatar} alt="Waiting..."></img>
      </div>
      <input id="textInput" type="text" placeholder="Type your item" onChange={e => setItemName(e.target.value)}></input>
      <button onClick={handleItem}>Add</button>
      {
        items.map(item => <Card name={item.name} id={item.id} onclick={testItem} />)

      }
      <div>
        <button id="clearButton" onClick={clearList}>Clear</button>
        <footer className="footer">Created by Ramon</footer>
      </div>

    </div>
  );
}
export default App;

// --Adicionar button para excluir o item
// -- Não deixar adicionar itens vazios
// -- Adicionar button de esvaziar lista
// -- Adicionar footer criado por Ramon
// -- Quando adicionar item, esvaziar o input box
// Limpar o value da input para que quando clieque add de novo ele não fique adicionando o mesmo item várias vezes
// Ajustar cores e interface
// Re-assistir video Diego (React)
// Fazer o deploy com link
// -- usar o useEffect para pegar foto e nome da API do github:  https://api.github.com/users/ramonmaximiliano
// -- Criar chave unica para cada component => Consegui colocar um ID baseado no index
