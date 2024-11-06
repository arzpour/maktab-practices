import Todo from "./components/todo";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 pt-10 bg-gray-100 min-h-screen">
        <Todo />
      </div>
    </>
  );
}

export default App;
