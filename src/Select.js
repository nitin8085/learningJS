function Select(props) {
    return (
        <div>
            <label for="cars">Choose a car:</label>
            <select name="cars" id="cars" value={props.value} onChange={props.onChange}>
                {props.children}
            </select>
        </div>
    )
}

export default Select;