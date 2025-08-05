function taskAdded() {
    alert("Your To-Do Task is added");
}

function AddTask() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg space-y-4">
            <label className="block text-gray-700 font-semibold">To Do Task:</label>
            <input type="text" required 
            placeholder="Enter the Task" 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" /><br />

            <label className="block text-gray-700 font-semibold">Due date:</label>
            <input type="date" required 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" /><br />

            <label className="block text-gray-700 font-semibold">Status</label>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Click Here</option>
                <option value="pending" >Task Pending</option>
                <option value="completed">Task is completed</option>
            </select>
            <button
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                onClick={() => taskAdded()}>Submit
            </button>
        </div>
    );
}

export default AddTask;



