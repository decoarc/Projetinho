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
  H1,
  H2,
  Body,
} from "../Home/styles";

import Button from "../../components/Buttons/Button";
import Logo from "../../Images/Logo.svg";
import WLogo from "../../Images/WLogo.svg";
import ImageCard from "./Image/ImageCard";
import Manage from "../../Images/Porto 1.jpg";

function Portfolio() {
  return (
    <ContainerDiv>
      <PrimeiraDiv>
        <HeadDiv>
          <img src={Logo} alt="" />
          <TextHeadDiv>
            <HeaderText style={{ color: "#5FB4A2" }}>HOME</HeaderText>
            <HeaderText>PORTFOLIO</HeaderText>
            <HeaderText>CONTATO</HeaderText>
          </TextHeadDiv>
        </HeadDiv>
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
            onClick={() => {}}
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
