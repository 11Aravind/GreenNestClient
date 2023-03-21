import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import { SocialMediaRightBar } from "./Components/SocialMediaRightBar/SocialMediaRightBar";
// import {SocialMediaIcons} from "./"
function App() {
  return (
    <div className="App">
      <SocialMediaRightBar />
      <Menu />
      <AllRoutes />
    </div>
  );
}

export default App;
