import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  h1 {
    color: var(--gray-3);
    font-size: 24px;
    font-family: "Open-sans", sans-serif;
    margin-left: 0.5rem;
    margin-bottom: 30px;
  }

  select {
    width: 74px;
    height: 34px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    color: #5ccf68;
    font-weight: 700;
    margin-left: 0.5rem;
    margin-bottom: 21px;
  }

  img {
    width: 93vw;
    margin: 0 auto;
  }

  div {
    display: flex;
    width: 55vw;
    margin-top: 40px;
    margin-left: 1rem;
    margin-bottom: 30px;

    span {
      font-size: 15px;
      font-weight: 700;
      line-break: auto;
      color: #b5b5b5;
    }

    figure {
      svg {
        margin-left: 0.4rem;
        width: 30px;
        height: 30px;
        color: var(--color-secundary);
      }
    }
  }

  hr {
    width: 90vw;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    img {
      width: 40vw;
    }

    hr {
      width: 50vw;
    }
  }
`;

export const BoxContainer = styled.div`
  display: flex;

  div {
    margin-top: 35px;
    margin-left: 2rem;

    h2 {
      margin-bottom: 1rem;
      font-size: 18px;
      color: var(--gray-3);

      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

export const Box = styled.p`
  width: 117px;
  height: 108px;
  background-color: #ffffff;
  box-shadow: 0px 1.65937px 7.05231px -0.829683px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  color: var(--gray-1);
  font-size: 57px;
  font-weight: 700;
  padding: 1rem 2rem;
  text-align: center;
`;

export const ProfileButton = styled.button`
  background: transparent;
  border: 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--gradient-green-blue);
  margin-top: 45px;
  margin-left: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const IdeaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100vh;
  background-color: var(--gray-0);
`;
