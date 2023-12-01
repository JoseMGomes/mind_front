import styled from "styled-components";
import colors from "../../../../../styles/colors";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background: ${(props) => (props.isActive ? colors.white : "transparent")};
  border-left: ${(props) => props.isActive && `5px solid ${colors.purple}`};
  color: ${(props) => (props.isActive ? colors.black : colors.white)};
  border: none;
  font-size: 20px;
  width: 100%;
  height: 50px;
  padding-left: ${(props) => (props.isActive ? "15px" : "20px")};

  svg{
    margin-right: 40px;
    margin-left: 10px;
    font-size: 20px;
  }
  
  &:hover {
    background: ${colors.white};
    color: ${colors.black};
  }
  
`;
