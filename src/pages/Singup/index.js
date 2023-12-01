import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom"
import * as C from './styles';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import Button from '../../components/Button';

const Singup = () => {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const singup = useAuth();
    
    const handleSingup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        }else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = singup (email, senha);
        if (res) {
            setError(res);
            return
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    }

  return (
    <C.Container>
        <C.Label>NOVA CONTA</C.Label>
        <Input 
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input 
          type="email"
          placeholder="Confirme o seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input 
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Criar" onClick={handleSingup}/>
        <C.LabelSingup>
            Já tem uma conta?
            <C.Strong>
                <Link to="/">Entre</Link>
            </C.Strong>
        </C.LabelSingup>
    </C.Container>
  );
}

export default Singup;