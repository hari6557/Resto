import "./App.css";
import { GlobalContext } from "./Components/Context";
import Nav from "./Components/Nav";
import ScrollTab from "./Components/ScrollTab";
import Context from "./Components/Context";

function App() {
  return (
    <div className="App">
      <Context>
        <Nav />
        <ScrollTab />
      </Context>
    </div>
  );
}

export default App;
