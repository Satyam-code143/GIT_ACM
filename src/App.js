import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Team from "./Components/Team/Team";
import DesktopCommonComponent from "./Components/CommonDesktopComponent/DesktopCommonComponent";

function App() {
  return (
    <Router basename="/GIT_ACM/">
      <DesktopCommonComponent>
        <Route path="/" exact component={Home} />
        <Route path="/OurTeam" component={Team} />
      </DesktopCommonComponent>
    </Router>
  );
}

export default App;
