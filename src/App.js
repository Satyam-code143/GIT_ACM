import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Team from "./Components/Team/Team";
import DesktopCommonComponent from "./Components/CommonDesktopComponent/DesktopCommonComponent";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <Router>
      <DesktopCommonComponent>
        <Route path="/" exact component={Home} />
        <Route path="/OurTeam" component={Team} />
        <Route path="/Events" component={Events} />
        <Route path="/Gallery" component={Gallery} />
      </DesktopCommonComponent>
    </Router>
  );
}

export default App;
