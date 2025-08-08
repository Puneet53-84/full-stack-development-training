function Header1() {
    return (
        <header className="flex justify-between items-center bg-red-300 p-4 text-xl">
            {/* Left Side - Home Button */}
            <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">Home</button>

            {/* Right Side - Create Account & Login */}
            <nav className="flex gap-4">
                <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">Create Account</button>
                <button className="px-4 py-2 bg-white rounded hover:bg-gray-200">Login</button>
            </nav>
        </header>
    );
}

export default Header1;
