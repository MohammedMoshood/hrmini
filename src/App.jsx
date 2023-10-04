import "./styles/App.css";
import Login from "../src/pages/Login";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Login></Login>
    </Router>
  );
}

export default App;
