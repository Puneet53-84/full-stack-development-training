function ConditionInJsx() {
    let age = 50;

    let day = 5;
    let dayName = "";
    switch (day) {
        case 1:
            dayName = "monday";
            break;
        case 2:
            dayName = "tuesday";
            break;
        default:
            dayName = "something";
    }

    return (
        <div>
            <h1>your age category is {age < 30 ? "young" : "old"}</h1>
            <h1>your day name is {dayName}</h1>
        </div>
    );
}

export { ConditionInJsx };