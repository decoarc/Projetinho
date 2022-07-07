import {
  HeadDiv,
  PrimeiraDiv,
  TextHeadDiv,
  HeaderText,
  SecondDiv,
  CardSecondDiv,
  ThirdDiv,
  ThirdLeftDiv,
  ThirdRightDiv,
  ThirdRightLineUpDiv,
  ThirdRightTextDiv,
  ThirdRightTitleDiv,
  ThirdRightLineDownDiv,
  FourthDiv,
  FourthTextDiv,
  ContainerDiv,
  FootDiv,
  FootTextDiv,
  H1,
  H2,
  Body,
} from "./styles";

import Button from "../../components/Buttons/Button";
import Logo from "../../Images/Logo.svg";
import WLogo from "../../Images/WLogo.svg";
import { Outlet, useNavigate } from "react-router-dom";

function Home() {
  const navigation = useNavigate();
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
        <SecondDiv>
          <CardSecondDiv>
            <TextHeadDiv>
              <H1>
                Olá, me chamo Alex Spencer e eu amo contruir websites lidnos
              </H1>
            </TextHeadDiv>
            <Button
              onClick={() => {
                navigation("Portfolio");
              }}
              text="IR PARA PORTFOLIO"
              variant="primary"
            ></Button>
          </CardSecondDiv>
        </SecondDiv>
        <ThirdDiv>
          <ThirdLeftDiv></ThirdLeftDiv>
          <ThirdRightDiv>
            <ThirdRightLineUpDiv></ThirdRightLineUpDiv>
            <ThirdRightTitleDiv>
              <H2>Sobre mim</H2>
            </ThirdRightTitleDiv>
            <ThirdRightTextDiv>
              <Body>
                Sou um desenvolvedor front-end júnior procurando por uma
                oportunidade. Eu foco em escrever HTML acessível, usando
                práticas modernas de CSS e escrevendo um JavaScript limpo.
                Quando estou escrevendo código JavaScript, na maioria das vezes
                estou usando React, mas posso me adapta para qualquer ferramenta
                se necessário. Moro em Londres, UK, mas também seria feliz
                trabalhando remotamente e tenho experiência em times remotos.
                Quando não estou codando, poderá me achar fora de casa. Eu adoro
                estar próximo a natureza seja para uma caminhada, corrida ou
                ciclismo. Eu amaria se você desse uma olhada no meu trabalho.
              </Body>
            </ThirdRightTextDiv>
            <Button
              onClick={() => {
                navigation("Portfolio");
              }}
              text="IR PARA PORTFOLIO"
              variant="secondary1"
            ></Button>
            <ThirdRightLineDownDiv></ThirdRightLineDownDiv>
          </ThirdRightDiv>
        </ThirdDiv>
        <FourthDiv>
          <FourthTextDiv>
            <H2>Interessado em fazer projetos comigo?</H2>
          </FourthTextDiv>
          <Button
            onClick={() => {
              navigation("Contato");
            }}
            text="CONTATO"
            variant="secondary1"
          ></Button>
        </FourthDiv>
      </PrimeiraDiv>
      <FootDiv>
        <img src={WLogo} alt="" />
        <FootTextDiv>
          <HeaderText style={{ color: "#FAFAFA" }}>HOME</HeaderText>
          <HeaderText style={{ color: "#FAFAFA" }}>PORTFOLIO</HeaderText>
          <HeaderText style={{ color: "#FAFAFA" }}>CONTATO</HeaderText>
        </FootTextDiv>
      </FootDiv>
      <Outlet />
    </ContainerDiv>
  );
}

export default Home;
