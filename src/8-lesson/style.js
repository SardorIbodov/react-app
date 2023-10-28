import styled from "styled-components";

// const Sarlavha = styled.h1`
//   color: red;
//   background-color: black;
// `;

// const Paragraf = styled.p`
//   background-color: yellow;
//   color: red;
//   font-size: 30px;
//   margin-bottom: 10px;
// `;

// const Box = styled.div`
//   width: ${(props) => (props.large ? "400px" : "200px")};
//   height: 200px;
//   background-color: ${(props) => props.bg};
//   margin: 20px;
// `;

// const SecondParagraf = styled(Paragraf)`
// 	font-weight: bold;
// `;

// export { Sarlavha, Paragraf, Box, SecondParagraf };

// const Wrapper = styled.div`
//   position: absolute;
//   inset: 0;
//   background-color: ${(props) => (props.isDark ? "#333" : "#fff")};
// `;

// const Button = styled.button``;

// const Text = styled.p`
//   color: ${(props) => (props.isDark ? "#fff" : "#000")};
// `;

// export { Wrapper, Button, Text };

const Header = styled.header`
  padding: 10px;
  background-color: #0d263b;
`;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img``;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 64px;
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const handleButtonType = (type) => {
  switch (type) {
    case "transparent": {
      return {
        color: "white",
        backgroundColor: "transparent",
        border: "1px solid white",
      };
    }
  }
};

const Button = styled.button`
  ${(props) => handleButtonType(props.type)}
  padding: 12px 40px;
  border-radius: 4px;
`;

export { Header, Container, Logo, Menu, MenuItem, MenuLink, Button };
