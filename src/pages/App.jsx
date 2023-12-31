import Profile from "../components/profile/profile";
import { useState } from "react";
import Switch from "../components/switch/switch";
import Links from "../components/links/link";
import SocialLinks from "../components/social-links/social-links";
import Footer from "../components/footer/footer";

import "./App.css";

import imgDarkMode from "../img/avatar.png";
import imgLightMode from "../img/avatar-light.jpg";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode)

  };
  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro";
  return (
    <div id="App" className={isLightMode ? "light" : ""}>
    <div id="container">
      <Profile imgAlt={imgAlt} imgSrc={imgSrc}>
        @Salmazo.f
      </Profile>
      <Switch mode={toggleMode}  infoButton={isLightMode}/>

      <div id="links">
        <ul>
          <Links link={"https://github.com"}>GitHub</Links>
          <Links link={"#"}>Instagram</Links>
          <Links link={"#"}>Portifólios</Links>
          <Links link={"#"}>Projetos</Links>
        </ul>
      </div>
      <div id="socialLinks">
        <SocialLinks href={"#"} icon={"logo-github"} />
        <SocialLinks href={"#"} icon={"logo-youtube"} />
        <SocialLinks href={"#"} icon={"logo-twitter"} />
        <SocialLinks href={"#"} icon={"logo-instagram"} />
      </div>
      <Footer link={"#"}>@Salmazo.f</Footer>
    </div>
    </div>
  );
};

export default App;
