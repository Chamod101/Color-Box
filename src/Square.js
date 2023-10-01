const Square = (props) => {
    return (
        <section
            className="square"
            style={{ backgroundColor: props.colorValue }}
        >
            <p>{props.colorValue ? props.colorValue : "Empty Value"}</p>

            <p>{props.hexCode ? props.hexCode : ""}</p>

        </section>
    )
}

Square.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Square