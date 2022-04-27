function Card(props) {
    return (
        <div className="card" id={props.id}/* onClick={()=>deleteItem(this)}*/>
            <strong>{props.name}</strong>
            <small onClick={props.onclick}>{props.id}</small>
        </div>
    );
}

export default Card;