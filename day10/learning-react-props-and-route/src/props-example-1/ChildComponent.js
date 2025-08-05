function ChildComponent(props) {

    return (
        <div>
            <h1>Profile of {props.collageName} students</h1>
            <div>
                <h3>{props.profile.name}</h3>
                <h3>{props.profile.age}</h3>
            </div>

        </div>
    )

}

export default ChildComponent;