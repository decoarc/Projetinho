import { ContainerDiv, HeaderDiv, HeaderText, SubHeaderDiv } from "./styles";
import Logo from "../../Images/Logo.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Main = () => {
  const navigation = useNavigate();
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <ContainerDiv>
      <HeaderDiv>
        <img src={Logo} />
        <SubHeaderDiv>
          <HeaderText
            selected={selectedPage === "home"}
            onClick={() => {
              navigation("home");
              setSelectedPage("home");
            }}
          >
            HOME
          </HeaderText>
          <HeaderText
            selected={selectedPage === "portfolio"}
            onClick={() => {
              navigation("portfolio");
              setSelectedPage("portfolio");
            }}
          >
            PORTFOLIO
          </HeaderText>
          <HeaderText
            selected={selectedPage === "contato"}
            onClick={() => {
              navigation("contato");
              setSelectedPage("contato");
            }}
          >
            CONTATO
          </HeaderText>
        </SubHeaderDiv>
      </HeaderDiv>

      {/* Outlet */}
      <Outlet />

      {/* soakos */}
    </ContainerDiv>
  );
};

export default Main;
