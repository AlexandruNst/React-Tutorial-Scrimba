export default function Die(props) {
    return (
        <div
            className={`die ${props.isHeld ? "is-held" : ""}`}
            onClick={(event) => props.hold(event, props.id)}
        >
            <span className="die--text">{props.number}</span>
        </ div>
    )
}