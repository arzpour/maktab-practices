import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "./redux/store";
import { InputsForm } from "./components/inputForm";
import { VideoTable } from "./components/video-table";

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen px-5">
        <InputsForm />
        <VideoTable />
      </div>
    </ReduxProvider>
  );
}

export default App;
