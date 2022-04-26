function Card(props) {
    return (
        <div className="card" /* onClick={()=>deleteItem(this)}*/>
            <strong>{props.name}</strong>
            <small>{props.id}</small>
        </div>
    );
}

//Test

export default Card;