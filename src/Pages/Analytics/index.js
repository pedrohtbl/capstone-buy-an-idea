import {
  Box,
  BoxContainer,
  GraphicContainer,
  IdeaContainer,
  MainContainer,
  ProfileButton,
} from "./style";
import { FiCalendar, FiMessageSquare } from "react-icons/fi";
import logo from "../../assets/Vector-2.svg";
import graphic from "../../assets/Graphic.svg";

const Analytics = () => {
  return (
    <MainContainer>
      <section>
        <GraphicContainer>
          <h1>Analytics</h1>
          <select>
            <option>2022</option>
          </select>
          <img src={graphic} alt="gráfico" />
          <div>
            <span>Comparação do mês de Abr/2022 com Mar/2022</span>
            <figure>
              <FiCalendar />
            </figure>
          </div>
          <hr />
        </GraphicContainer>
        <BoxContainer>
          <div>
            <h2>
              Apoios <img src={logo} alt="icone-lampada" />
            </h2>
            <Box>8</Box>
          </div>
          <div>
            <h2>
              Conversas <FiMessageSquare />
            </h2>
            <Box>5</Box>
          </div>
        </BoxContainer>
        <ProfileButton>Ver Perfil</ProfileButton>
      </section>

      <section>
        <IdeaContainer></IdeaContainer>
      </section>
    </MainContainer>
  );
};

export default Analytics;
