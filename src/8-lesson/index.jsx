import React from "react";
// import { Sarlavha, Paragraf, Box, SecondParagraf } from "./style";
// import { Wrapper, Button, Text } from "./style";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  Container,
  Header,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
} from "./style";
import logo from "./logo.svg";

class Lesson8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
      showModal: false,
    };
  }
  render() {
    return (
      <div>
        <Header>
          <Container>
            <Logo src={logo} />
            <Menu>
              <MenuItem>
                <MenuLink href="#">Home</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#">Properties</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#">Contact</MenuLink>
              </MenuItem>
            </Menu>
            <Button
              type="transparent"
              onClick={() =>
                this.setState({ showModal: !this.state.showModal })
              }
            >
              Login
            </Button>
          </Container>
        </Header>
        {this.state.showModal && (
          <div
            style={{ width: "200px", height: "200px", backgroundColor: "red" }}
          >
            Box
          </div>
        )}
        {/* <Wrapper isDark={this.state.isDark}>
          <Text isDark={this.state.isDark}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            corrupti maxime magni cum necessitatibus corporis blanditiis veniam
            earum nisi ipsam? Aut inventore est, incidunt blanditiis qui ipsam
            natus sed eaque repudiandae veniam quasi? Ab corporis reiciendis
            laboriosam quibusdam dicta tempora, molestias excepturi quo ratione
            nisi perferendis. Repellat magnam impedit, soluta, assumenda
            suscipit modi corrupti reprehenderit, error veritatis officia
            laboriosam! Repellendus quod debitis officia porro aspernatur ipsam
            praesentium aliquam minima dolorum id quia eligendi adipisci dolore
            laborum quisquam similique, sit ea fugiat aperiam libero asperiores
            ad, atque nam soluta! Corrupti recusandae assumenda omnis suscipit
            accusamus repellat cum minus quaerat quo autem.
          </Text>
          <Button onClick={() => this.setState({ isDark: !isDark })}>
            {isDark ? (
              <FontAwesomeIcon icon={faSun} style={{ color: "#fffb00", fontSize: "32px" }} />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                style={{ color: "#000000", fontSize: "32px" }}
              />
            )}
          </Button>
        </Wrapper> */}
        {/* <Sarlavha>Styled Components</Sarlavha>
        <Paragraf>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          aut?
        </Paragraf>
        <SecondParagraf>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          aut?
        </SecondParagraf>
        <Sarlavha>End</Sarlavha>
        <Box bg="red" large></Box>
        <Box bg="blue"></Box>
        <Box bg="yellow"></Box> */}
      </div>
    );
  }
}

export default Lesson8;
