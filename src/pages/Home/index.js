import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as C from "./styles";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { singout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Dashboard</C.Title>
      <Button Text="Sair" onClick={() => [singout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
