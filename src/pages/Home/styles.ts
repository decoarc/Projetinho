import styled from "styled-components";
import Main from "../../Images/Bitmap.jpg";
import { theme } from "../../theme";
import Portrate from "../../Images/profile.jpg";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 1764px;
  margin-bottom: 100px;
`;

export const PrimeiraDiv = styled.div`
  padding: 64px 164px 0px 165px;
  width: 1110px;
  display: flex;
  flex-direction: column;
`;

export const HeadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
`;

export const TextHeadDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
`;

export const SecondDiv = styled.div`
  display: flex;
  margin-top: 6px;
  background-size: contain;
  background-repeat: no-repeat;
  align-items: flex-end;
  width: 1110px;
  height: 600px;
  background-position: center;
  background-image: url(${Main});
  justify-content: flex-start;
`;

export const CardSecondDiv = styled.div`
  width: 445px;
  height: 357px;
  background-color: ${theme.colors.veryLightGray};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const TextCardSecondDiv = styled.div`
  display: flex;
`;

export const HeaderText = styled.span`
  font-family: Public Sans;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const ThirdDiv = styled.div`
  margin-top: 150px;
  display: flex;
  gap: 140px;
`;

export const ThirdLeftDiv = styled.div`
  display: flex;
  background-image: url(${Portrate});
  background-position: center;
  background-size: cover;
  width: 540px;
  height: 600px;
`;

export const ThirdRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 430px;
  height: 600px;
`;

export const ThirdRightLineUpDiv = styled.div`
  width: 430px;
  height: 1px;
  background-color: ${theme.colors.gDarkBlue};
  opacity: 15%;
`;

export const ThirdRightTitleDiv = styled.div`
  display: flex;
`;

export const ThirdRightTextDiv = styled.div`
  display: flex;
`;

export const ThirdRightButtonDiv = styled.div`
  margin-top: 24px;
  display: flex;
`;

export const ThirdRightLineDownDiv = styled.div`
  margin-top: 46px;
  width: 430px;
  height: 1px;
  align-items: flex-end;
  opacity: 15%;
  background-color: ${theme.colors.gDarkBlue};
`;

export const FourthDiv = styled.div`
  display: flex;
  align-items: center;
  width: 1110px;
  height: 84px;
  margin-top: 156px;
  gap: 575px;
`;

export const FourthTextDiv = styled.div`
  width: 367px;
  height: 84px;
  display: flex;
  align-items: center;
`;

export const FootDiv = styled.div`
  background-color: ${theme.colors.gDarkBlue};
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 165px;
  margin-top: 150px;
  width: 1275px;
  height: 80px;
  gap: 50px;
`;

export const FootTextDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
`;
export const H1 = styled.h1`
  font-family: ${theme.fonts.h1.fontFamily};
  line-height: ${theme.fonts.h1.lineHeight};
  font-size: ${theme.fonts.h1.size};
  font-style: ${theme.fonts.h1.fontStyle};
`;

export const H2 = styled.h2`
  font-family: ${theme.fonts.h2.fontFamily};
  line-height: ${theme.fonts.h2.lineHeight};
  font-size: ${theme.fonts.h2.size};
  font-style: ${theme.fonts.h2.fontStyle};
`;

export const Body = styled.body`
  font-family: ${theme.fonts.body.fontFamily};
  line-height: ${theme.fonts.body.lineHeight};
  font-size: ${theme.fonts.body.size};
  font-style: ${theme.fonts.body.fontStyle};
`;
