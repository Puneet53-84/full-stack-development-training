function DoneToDoPage(props) {
    let todoArr=props.todo;
    return (
        <div className="overflow-x-auto mt-10 px-4">
            <table className="min-w-full border border-gray-300 bg-white rounded-xl shadow-lg text-center">
                <thead className="bg-green-500 text-white">
                    <tr>
                        <th className="px-6 py-3">ToDo Title</th>
                        <th className="px-6 py-3">Completed Date</th>
                        <th className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    todoArr.map((todo,index) =>(
                        todo.status === "completed" &&(
                            <tr key={todo.id}>
                                <td>{todo.todoTitle}</td>
                                <td>{todo.status}</td>
                                <td>{todo.completedDate.toLocaleDateString()}</td>
                            </tr>
                        )
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default DoneToDoPage;
