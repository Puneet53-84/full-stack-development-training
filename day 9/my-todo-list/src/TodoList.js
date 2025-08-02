function TodoList() {
  const todos = ["Finish homework", "Buy groceries", "Read a book", "GYM"];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 transition hover:scale-[1.02] hover:shadow-xl">
    <h2 className="text-2xl font-semibold text-yellow-600 mb-4 border-b pb-2">✌️Completed Tasks</h2>
  {todos.map((value, index) => (
    <h3
      key={index}
      className="text-gray-800 text-lg py-1 pl-4 border-l-4 border-green-400 hover:bg-green-50 rounded-sm"
    >
      {index + 1}. {value} 
    </h3>
  ))}
</div>
  );
}

export { TodoList };




  