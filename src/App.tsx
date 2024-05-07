import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <main
        id="mainwrapper"
        className="flex flex-col min-h-screen max-h-screen h-screen overflow-hidden"
      >
        <Header />
        <Main />
      </main>
    </Provider>
  );
}

export default App;
