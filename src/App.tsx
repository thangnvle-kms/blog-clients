import FooterComponent from "./components/footer/FooterComponent";
import HomeComponent from "./components/home/HomeComponent";
import LeftMenuComponent from "./components/menu/LeftMenuComponent";
import {
  BrowserRouter as Router, Route, Link, NavLink
} from "react-router-dom";
import RouteComponent from "./components/route/RouteComponent";

function App() {
  const isStatus = false;
  return (
    <Router>
      <div>
        <HomeComponent />
        <LeftMenuComponent />
          <RouteComponent />
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
