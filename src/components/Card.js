function Card(props) {
    return (
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.value}</small>
        </div>
    );
}

export default Card;