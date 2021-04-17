import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/ACM-GIT">
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
