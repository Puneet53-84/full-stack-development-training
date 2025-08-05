function MyComponent(props) {
    // in this component i print/render my fruits array
    let myFruits = props.fruits;

    return (
        <div>
            <ul>
                {
                    myFruits.map((val, idx) => (
                        <li>{val}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MyComponent;