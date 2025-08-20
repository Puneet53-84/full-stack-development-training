import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="flex justify-center gap-4 p-4 bg-blue-100 shadow-md rounded-md">
            <Link to="/todo-add">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                Add
            </button>
            </Link>

            <Link to="/todo-show">
            <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
                Show
            </button>
            </Link>

            <Link to="/todo-done">
            <button className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300">
                Done
            </button>
            </Link>
        </div>
    );
}

export default Header;
