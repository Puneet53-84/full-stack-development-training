function Header() {
    return (
        <div className="flex justify-center gap-4 p-4 bg-blue-100 shadow-md rounded-md">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                Add
            </button>
            <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
                Show
            </button>
            <button className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300">
                Done
            </button>
        </div>
    );
}

export default Header;
