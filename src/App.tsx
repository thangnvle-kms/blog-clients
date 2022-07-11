import ContentComponent from "./components/content/ContentComponent";
import FooterComponent from "./components/footer/FooterComponent";
import HomeComponent from "./components/home/HomeComponent";
import LeftMenuComponent from "./components/menu/left-menu/LeftMenuComponent";

function App() {
  return (
   <div>
      <HomeComponent />
      <LeftMenuComponent />
      <ContentComponent />
      <FooterComponent />
   </div>
  );
}

export default App;
