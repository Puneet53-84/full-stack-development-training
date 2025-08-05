function ProfileCard(props) {
    return (
        <div className="border p-4 rounded-xl shadow-md w-64 mb-4">
            <h2 className="text-xl font-bold">{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
        </div>
    );
}

export default ProfileCard;