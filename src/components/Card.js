function Card(props) {
    return (
        <div className="card" id={props.id} >
            <strong>{props.name}</strong>

            {/*             passando o id do component como parametro para a function delete para poder atualizar a lista de items, mais facil assim do que com o event listener do vanila javascript
 */}            <small onClick={() => props.onclick(props.id)}>{props.id}</small>
        </div>
    );
}

export default Card;