function ShowTask() {
    return (
        <div className="overflow-x-auto mt-10 px-4">
            <table className="min-w-full border border-gray-300 bg-white rounded-xl shadow-lg text-center">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="px-6 py-3">ToDo Title</th>
                        <th className="px-6 py-3">Due Date</th>
                        <th className="px-6 py-3">Mark Done</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    <tr className="border-b">
                        <td className="px-6 py-3">Meditate for 10 min</td>
                        <td className="px-6 py-3">04/august/2025</td>
                        <td className="px-6 py-3"><input type="checkbox" /></td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-6 py-3">Watch React Tutorial</td>
                        <td className="px-6 py-3">06/august/2025</td>
                        <td className="px-6 py-3"><input type="checkbox" /></td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-6 py-3">Buy Groceries</td>
                        <td className="px-6 py-3">01/august/2025</td>
                        <td className="px-6 py-3"><input type="checkbox" /></td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-6 py-3">Review PR on GitHub</td>
                        <td className="px-6 py-3">04/august/2025</td>
                        <td className="px-6 py-3"><input type="checkbox" /></td>
                    </tr>
                    <tr className="border-b">
                        <td className="px-6 py-3">Drink 2L water</td>
                        <td className="px-6 py-3">10/september/2025</td>
                        <td className="px-6 py-3"><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td className="px-6 py-3">Stretch after work</td>
                        <td className="px-6 py-3">15/dec/2025</td>
                        <td className="px-6 py-3"><input type="checkbox" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ShowTask;
