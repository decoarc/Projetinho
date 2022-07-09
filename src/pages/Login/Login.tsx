import { ContainerDiv, LoginDiv } from "./styles";
import Button from "../../components/Buttons/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/auth";

function Login() {
  const navigation = useNavigate();
  const dispath = useDispatch();
  return (
    <ContainerDiv>
      <LoginDiv>
        <Button
          onClick={() => {
            dispath(login({ user: "charope", password: "chafaris" }));
            navigation("/home");
          }}
          text="IR PARA PORTFOLIO"
          variant="primary"
        ></Button>
      </LoginDiv>
    </ContainerDiv>
  );
}

export default Login;
