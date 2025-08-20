import { callGetAllAPI, callUpdateAPI, callDeleteAPI } from "./BackendAPI";

function ShowTodoPage(props) {

    let todoArr = props.todo;
    console.log(JSON.stringify(todoArr))

    async function handleClick(e, todoId) {

        await callUpdateAPI(
            '/update-todo',
            { status: 'completed', completionDate: new Date() }, { 'todoId': todoId })
        let todoList = await callGetAllAPI('/read-todos');
        props.setTodo(todoList);
    };
    async function handleDeleteClick(e, todoId) {

        await callDeleteAPI(
            '/delete-todo',
            { 'todoId': todoId })
        let todoList = await callGetAllAPI('/read-todos');
        props.setTodo(todoList);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-4">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                <h2 className="text-2xl font-bold text-center text-purple-700 p-4 border-b">Pending Tasks</h2>
                <table className="w-full table-auto">
                    <thead className="bg-purple-100 text-purple-800">
                        <tr>
                            <th className="py-3 px-4 text-left">Todo Title</th>
                            <th className="py-3 px-4 text-left">Status</th>
                            <th className="py-3 px-4 text-left">Due Date</th>
                            <th className="py-3 px-4 text-center">Mark Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoArr.map((todo) =>
                            todo.status === "pending" && (
                                <tr key={todo.todoId} className="hover:bg-purple-50 transition">
                                    <td className="py-2 px-4">{todo.todoTitle}</td>
                                    <td className="py-2 px-4">
                                        <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-sm">
                                            {todo.status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4">{todo.dueDate}</td>
                                    <td className="py-2 px-4 text-center">
                                        <button
                                            onClick={(e) => handleClick(e, todo.todoId)}
                                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                                        >
                                            ✔️
                                        </button>
                                    </td>
                                    <td className="py-2 px-4 text-center">
                                        <button
                                            onClick={(e) => handleDeleteClick(e, todo.todoId)}
                                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                                        >
                                            ❌
                                        </button>
                                    </td>
                                </tr>
                            )
                        )}
                        {
                            todoArr.filter(todo => todo.status === "pending").length === 0 && (
                                <tr>
                                    <td colSpan="4" className="text-center text-gray-500 py-6">
                                        No pending tasks!
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

export default ShowTodoPage;
