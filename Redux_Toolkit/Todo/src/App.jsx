import "./App.css";
import Todo from "./components/todo";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
    return (
        <>
          <h1>Todo</h1>
          <Provider store={store}>
              <Todo />
          </Provider>
        </>
    );
};

export default App;
