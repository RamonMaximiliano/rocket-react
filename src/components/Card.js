function Card(props) {
    return (
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.id}-X</small>
        </div>
    );
}

//Test

export default Card;