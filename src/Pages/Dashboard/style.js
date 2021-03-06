import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export const CustomMain = styled.main`
  display: flex;
  min-height: 90vh;
  max-width: 100%;
  /* padding-left: 20px; */
`;

export const Title = styled.h1`
  color: var(--color-secundary);
  font-size: 36px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: 54px;
  }
`;

export const MatchesUl = styled.ul`
  min-height: 450px;
  width: 100%;
  overflow-x: scroll;
  /* padding-left: 40px; */
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;

  a {
    margin-top: 20px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  h2 {
    color: var(--color-primary);
    width: 100%;
  }

  @media (min-width: 768px) {
    min-height: 600px;
    overflow-x: auto;
  }
`;
export const Footer = styled.footer`
  height: 9vh;
  width: 100%;
  background-color: var(--gray-6);
  border-top: solid 2px var(--gray-1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;

  @media (min-width: 768px) {
    display: none;
  }

  > div {
    width: 35px;
    height: 35px;
    background: linear-gradient(var(--gradient-green-blue));
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const BiUser = styled(BiUserCircle)`
  color: var(--gray-6);
  width: 30px;
  height: 30px;
`;
export const BsChat = styled(BsFillChatLeftDotsFill)`
  color: var(--color-secundary);
  width: 30px;
  height: 30px;
`;
export const HamburgerMenu = styled(GiHamburgerMenu)`
  width: 30px;
  height: 30px;
`;

export const CustomDiv = styled.div`
  width: 100vw;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-top: 100px;
  }
`;
