function ShowTodoPage(props) {
    let todoArr = props.todo;

    function handleClick(e, todoId) {
        // delete todo from todoArr where id=todoId
        // todoArr = todoArr.filter(todo => todo.id !== todoId);
        // props.setTodo(todoArr);
        // alert("Todo Completed");

        let newTodoArr = []

        for (let i=0;i<todoArr.length;i++) {
            newTodoArr[i] = todoArr[i]

            if(todoArr[i].id === todoId) {
                newTodoArr[i].status = "completed";
                newTodoArr[i].completedDate = new Date()
            }
        }
        props.setTodo(newTodoArr);
    }

    return (
        <div class="flex justify-center items-center h-[700px] bg-gradient-to-br from-pink-100 to-purple-200">
            <table border="1">
                <tr>
                    <th>Todo Title</th>
                    <th>Due Date</th>
                    <th>Mark Done</th>
                </tr>
                {
                    todoArr.map((todo,index) => (
                        todo.status === "pending" &&(
                        <tr key={todo.id}>
                            <td>{todo.todoTitle}</td>
                            <td>{todo.status}</td>
                            <td>{todo.dueDate}</td>
                            <td><button onClick={(e) => handleClick(e,todo.id)}>✔️</button></td>
                        </tr>
                    )
                    ))
                }

            </table>

        </div>
    )
}
export default ShowTodoPage;