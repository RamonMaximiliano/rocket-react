import Card from "./components/Card.js"

function App() {
  return (
    <div className="tittle-div">
      <h1 className="MainTittle">React App</h1>
      <input type="text" placeholder="Type your item"></input>
      <button>Add</button>

      <Card/>

    </div>
  );
}

export default App;
