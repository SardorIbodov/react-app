import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 70px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderItem = styled.span`
  font-size: 20px;
  text-decoration: underline;
  &:hover {
    font-weight: 700;
  }
`;

export {HeaderContainer, HeaderItem};
