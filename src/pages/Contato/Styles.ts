import styled from "styled-components";
import { theme } from "../../theme";

export const PrincDiv = styled.div`
  display: flex;
  gap: 125px;
  margin-bottom: 50px;
`;

export const TitleDiv = styled.div`
  display: flex;
  width: 350px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex: 1;
`;

export const Input = styled.input`
  border: none;
  height: 48px;
  width: 635px;
  margin-bottom: 64px;
  background-color: rgb(51, 60, 61, 0.1);
`;

export const Inputdos = styled.input`
  border: none;
  height: 96px;
  width: 635px;
  margin-bottom: 24px;
  background-color: rgb(51, 60, 61, 0.1);
`;

export const Body = styled.body`
  font-family: ${theme.fonts.body.fontFamily};
  line-height: ${theme.fonts.body.lineHeight};
  font-size: ${theme.fonts.body.size};
  font-style: ${theme.fonts.body.fontStyle};
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 64px;
  flex: 1;
  align-items: flex-start;
`;
