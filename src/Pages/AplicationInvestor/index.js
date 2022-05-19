import { useContext } from "react";
import { InterpriseList } from "../../Components/InterpriseList";
import { InterpriseListContext } from "../../Providers/interpriseList";
import { InvestidorContainer, LoadingPage } from "./styles";
import { useLogin } from "../../Providers/Login";
import Lamp from "../../assets/Lamp.svg";
import logo from "../../assets/Vector.svg";
import { Redirect } from "react-router-dom";

export const AplicationInvestor = () => {
  const { list, cardIsOpen } = useContext(InterpriseListContext);
  const { user } = useLogin();

  if (!user) {
    return <Redirect to="/" />;
  }
  if (user.user.type === "company") {
    return <Redirect to="/dashboard" />;
  }

  return (
    <InvestidorContainer isInInfoCard={cardIsOpen}>
      <InterpriseList />

      <section className="ApoieEstaIdeia">
        <button>
          <img src={Lamp} alt="Ícone de lâmpada" />
          <h6>Apoie esta ideia</h6>
        </button>
        <p>
          Mesmo que não tenha interesse em investir, ajude esta ideia a ganhar
          mais destaque para outros investidores com o seu apoio.
        </p>
      </section>
    </InvestidorContainer>
  );
};
