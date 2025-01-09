import { RecoilRoot } from "recoil";
import Todo from "./components/todo";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="flex flex-col items-center gap-10 pt-10 bg-gray-100 min-h-screen">
          <Todo />
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
