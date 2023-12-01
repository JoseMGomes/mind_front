import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom"
import * as C from './styles';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import Button from '../../components/Button';

const Singin = () => {
  const { singin } = useAuth();
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = () => {
    if(!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = singin(email, senha);

    if (res) {
      setError(res)
      return;
    }

    navigate("/home")
  }

  return (
    <C.Container>
      <C.Label>SEJA BEM VINDO!</C.Label>
      <C.Content>
        <Input 
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input 
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Entrar" onClick={handleLogin}/>
        <C.LabelSingup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/singup">Registre-se</Link>
          </C.Strong>
        </C.LabelSingup>
      </C.Content>
    </C.Container>
  );
}

export default Singin;