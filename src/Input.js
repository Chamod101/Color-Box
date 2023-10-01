import colorNames from "colornames"

const Input = (props) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name :</label>
            <input
                autoFocus
                type="text"
                placeholder="Add color value"
                required
                value={props.colorValue}
                onChange={(e) => {
                    props.setColorValue(e.target.value)
                    props.setHexCode(colorNames(e.target.value))
                }}
            />
        </form>
    )
}


export default Input