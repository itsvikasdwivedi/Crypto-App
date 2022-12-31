import {BrowserRouter} from "react-router-dom"
import './App.css';
import Header from "./Components/Header";
import AllRoutes from "./Components/AllRoutes";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <AllRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
