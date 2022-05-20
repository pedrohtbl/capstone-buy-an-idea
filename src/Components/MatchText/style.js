import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--green-1);

  h1 {
    position: relative;
    font-size: 6em;
    font-family: arial, sans-serif;
    letter-spacing: 15px;
    color: #2b1d07;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    outline: none;
    animation: animate 5s linear infinite;

    @keyframes animate {
      0%,
      18%,
      20%,
      50.1% {
        color: #2b1d07;
        text-shadow: none;
      }
      18%,
      20%,
      50.1%,
      100% {
        color: #ffd726;
        text-shadow: 0 0 10px #ff7b26, 0 0 20px #ff7b26, 0 0 40px #ff7b26,
          0 0 80px #ff7b26, 0 0 160px #ff7b26;
      }
    }
  }
`;
