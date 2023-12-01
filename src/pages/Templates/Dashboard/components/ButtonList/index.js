import React from 'react';

import { Container } from './styles';

function ButtonList({text, icon:Icon}) {
  return (
    <Container>
        <Icon/>
        <span>{text}</span>
    </Container>
  )
}

export default ButtonList;