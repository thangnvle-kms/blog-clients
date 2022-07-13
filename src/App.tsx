import ContentComponent from "./components/content/ContentComponent";
import FooterComponent from "./components/footer/FooterComponent";
import HomeComponent from "./components/home/HomeComponent";
import LeftMenuComponent from "./components/menu/left-menu/LeftMenuComponent";
// import {
//   BrowserRouter as Router, Switch, Route, Link, NavLink
// } from "react-router-dom";
import RouteComponent from "./components/route/RouteComponent";

function App() {
  return (
    // <Router>
      <div>
        <HomeComponent />
        <LeftMenuComponent />
          <ContentComponent />
          {/* <RouteComponent /> */}
        <FooterComponent />
      </div>
    // </Router>
  );
}

export default App;
