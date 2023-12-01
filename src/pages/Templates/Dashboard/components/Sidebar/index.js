import React from "react";

import { Container, Menu } from "./styles";
import { routes } from "../../../../../routes/routesPath";
import ButtonList from "../ButtonList";

function Sidebar() {
  return (
    <Container>
        <h1>MIND CURSOS</h1>
      <Menu>
        {routes.protected.map((route) => (
          <ButtonList text={route.title} icon={route.icon} />
        ))}
      <></>
      </Menu>
    </Container>
  );
}

export default Sidebar;
