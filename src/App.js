import Login from "../src/Components/Login/Login.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import RocketIcon from "../src/assets/images/Saly-1.svg";
import WorldIcon from "../src/assets/images/Saly-44.png";
import BalloonIcon from "../src/assets/images/Saly-32.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg_img">
        <img className="img_one" src={RocketIcon} alt="Rocket Icon" />
        <img className="img_two" src={WorldIcon} alt="World Icon" />
        <img className="img_three" src={BalloonIcon} alt="Balloon Icon" />
      </div>
      <div className="container">
        <div className="container__form">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;
