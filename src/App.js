import "./App.scss";
import Homepage from "./component/Homepage/Homepage";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Homepage />
      </Router>
    </div>
  );
}

export default App;
