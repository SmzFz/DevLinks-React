import Profile from "../components/profile/profile";
import { useState } from "react";
import Switch from "../components/switch/switch";
import Links from "../components/links/link";

import "./App.css";

import imgDarkMode from "../img/avatar.png";
import imgLightMode from "../img/avatar-light.jpg";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro";
  return (
    <div id="container">
      <Profile imgAlt={imgAlt} imgSrc={imgSrc}>
        @Salmazo.f
      </Profile>
      <Switch></Switch>
      <div id="links">
        <ul>
            <Links link={"https://github.com"}>GitHub</Links>
            <Links link={"#"}>Instagram</Links>
            <Links link={"#"}>Portifólios</Links>
            <Links link={"#"}>Projetos</Links>
        </ul>
      </div>
    </div>
  );
};

export default App;
