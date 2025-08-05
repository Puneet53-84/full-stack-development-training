function AddTask() {
    return(
        <div>
        <label>To Do Task:</label>
        <input type="text" placeholder="Enter the Task" /><br/>
        <label>Due date:</label>
        <input type="date"/><br/>
        </div>
    )
}

export default AddTask;