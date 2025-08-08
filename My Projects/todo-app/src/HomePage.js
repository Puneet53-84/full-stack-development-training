function HomePage() {
    return (
        <div className="h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-10 max-w-2xl w-full text-center">
                <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
                    Welcome to Your To-Do App
                </h1>
                <p className="text-gray-700 text-lg">
                    Manage your tasks efficiently — add new ones, track pending items, and mark them complete!
                </p>
            </div>
        </div>
    );
}

export default HomePage;
