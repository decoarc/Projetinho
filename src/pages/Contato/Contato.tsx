import {
  HeadDiv,
  PrimeiraDiv,
  TextHeadDiv,
  HeaderText,
  ContainerDiv,
  FootDiv,
  FootTextDiv,
  H2,
} from "../Home/styles";

import Button from "../../components/Buttons/Button";

import {
  Body,
  Input,
  InputDiv,
  Inputdos,
  PrincDiv,
  TextDiv,
  TitleDiv,
} from "./Styles";
import Logo from "../../Images/Logo.svg";
import WLogo from "../../Images/WLogo.svg";

function Contato() {
  return (
    <ContainerDiv>
      <PrimeiraDiv>
        <PrincDiv>
          <TitleDiv>
            <H2>Entre em Contato</H2>
          </TitleDiv>

          <TextDiv>
            <Body>
              {" "}
              Eu adoraria escutar sobre seu trabalho atual e como eu poderia
              ajudar. Atualmente estou procurando por um cargo e aberto para
              várias oportunidades. Minha preferência é uma oportunidade em uma
              empresa Britânica. Mas também estou feliz em escutar sobre
              oportunidades remotas. Sou uma pessoa trabalhadora e positiva que
              sempre fará as tasks com um senso de propósito e atenção aos
              detalhes. Fique livre para checar meu perfis abaixo e entrar em
              contato utilizando o formulário.
            </Body>
          </TextDiv>
        </PrincDiv>

        <PrincDiv>
          <TitleDiv>
            <H2>Contato</H2>
          </TitleDiv>{" "}
          <InputDiv>
            Nome
            <Input></Input>
            E-mail
            <Input></Input>
            Mensagem
            <Inputdos></Inputdos>
            <Button
              onClick={() => {}}
              text="ENVIAR"
              variant="secondary2"
            ></Button>
          </InputDiv>
        </PrincDiv>
      </PrimeiraDiv>

      <FootDiv>
        <img src={WLogo} alt="" />
        <FootTextDiv>
          <HeaderText style={{ color: "#FAFAFA" }}>HOME</HeaderText>
          <HeaderText style={{ color: "#FAFAFA" }}>PORTFOLIO</HeaderText>
          <HeaderText style={{ color: "#FAFAFA" }}>CONTATO</HeaderText>
        </FootTextDiv>
      </FootDiv>
    </ContainerDiv>
  );
}

export default Contato;
