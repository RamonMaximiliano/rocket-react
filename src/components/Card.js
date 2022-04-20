function Card(props) {
    return (
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.id}</small>
        </div>
    );
}

export default Card;