import { callUpdateAPI , callGetAllAPI } from "./BackendAPI";

function DoneToDoPage(props) {
    let todoArr = props.todo;

   async function handleClick(e, todoId) {
        await callUpdateAPI('/update-todo', 
            { status: 'pending', completionDate:null }, 
            { 'todoId': todoId })
        let todoList = await callGetAllAPI('/read-todos');
        props.setTodo(todoList);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-teal-200 p-4">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                <h2 className="text-2xl font-bold text-center text-green-700 p-4 border-b">
                    Completed Tasks
                </h2>
                <table className="w-full table-auto">
                    <thead className="bg-green-500 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Todo Title</th>
                            <th className="py-3 px-4 text-left">Completed Date</th>
                            <th className="py-3 px-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoArr.map((todo) =>
                            todo.status === "completed" && (
                                <tr key={todo.id} className="hover:bg-green-50 transition">
                                    <td className="py-2 px-4">{todo.todoTitle}</td>
                                    <td className="py-2 px-4">
                                        {new Date(todo.completionDate).toLocaleDateString()}
                                    </td>
                                    <td className="py-2 px-4">
                                        <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-sm">
                                            {todo.status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4">
                                        <button
                                            onClick={(e) => handleClick(e, todo.todoId)}
                                            className="px-2 py-1 bg-green-200 text-green-800 rounded text-sm"
                                        >
                                            ♻️
                                        </button>
                                    </td>
                                </tr>
                            )
                        )}
                        {
                            todoArr.filter(todo => todo.status === "completed").length === 0 && (
                                <tr>
                                    <td colSpan="3" className="text-center text-gray-500 py-6">
                                        No completed tasks yet!
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DoneToDoPage;
