import {
  HeadDiv,
  PrimeiraDiv,
  TextHeadDiv,
  HeaderText,
  ContainerDiv,
  FourthDiv,
  FourthTextDiv,
  FootDiv,
  FootTextDiv,
  H2,
} from "../Home/styles";

import { useNavigate } from "react-router-dom";

import Button from "../../components/Buttons/Button";
import Logo from "../../Images/Logo.svg";
import WLogo from "../../Images/WLogo.svg";
import ImageCard from "./Image/ImageCard";
import Manage from "../../Images/Porto 1.jpg";

function Portfolio() {
  const navigation = useNavigate();
  return (
    <ContainerDiv>
      <PrimeiraDiv>
        <ImageCard
          image={Manage}
          position="left"
          text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais."
          title="Manage"
          buttonText="VER PROJETO"
          onClick={() => {
            console.log("clicou no botão");
          }}
        />
        <ImageCard
          image={Manage}
          position="right"
          text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais."
          title="Manage"
          buttonText="VER PROJETO"
          onClick={() => {
            console.log("clicou no botão");
          }}
        />
        <ImageCard
          image={Manage}
          position="left"
          text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais."
          title="Manage"
          buttonText="VER PROJETO"
          onClick={() => {
            console.log("clicou no botão");
          }}
        />
        <ImageCard
          image={Manage}
          position="right"
          text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais."
          title="Manage"
          buttonText="VER PROJETO"
          onClick={() => {
            console.log("clicou no botão");
          }}
        />
        <FourthDiv>
          <FourthTextDiv>
            <H2>Interessado em fazer projetos comigo?</H2>
          </FourthTextDiv>
          <Button
            onClick={() => {
              navigation("/contato");
            }}
            text="CONTATO"
            variant="secondary1"
          ></Button>
        </FourthDiv>
      </PrimeiraDiv>

      <FootDiv>
        <img src={WLogo} alt="" />
        <FootTextDiv>
          {" "}
          <HeaderText style={{ color: "#FAFAFA" }}>HOME</HeaderText>
          <HeaderText style={{ color: "#FAFAFA" }}>PORTFOLIO</HeaderText>
          <HeaderText style={{ color: "#FAFAFA" }}>CONTATO</HeaderText>
        </FootTextDiv>
      </FootDiv>
    </ContainerDiv>
  );
}

export default Portfolio;
