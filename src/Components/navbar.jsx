import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { Badge } from "@mui/material";
import { ShoppingCartCheckoutRounded } from "@mui/icons-material";

const Container = styled.div`
  height: 120px;
  background-color: #ecf3ff;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SearchContainer = styled.div`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 7px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  background-color: #ecf3ff;
  size: 5;
  type: text;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  alig-items: center;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`;
const LogoK = styled.img`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  width: 50px;
  margin-left: 30px;
`;
const Navbar = () => {

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Logo src="https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png"></Logo>
            <SearchContainer>
              <Search
                style={{ fontSize: "30px" }}
              ></Search>
              
              <Input></Input>
            </SearchContainer>
          </Left>
          <Right>
            <MenuItems>Training</MenuItems>
            <MenuItems>Consulting</MenuItems>
            <MenuItems>Solutions</MenuItems>
            <MenuItems>Webstore</MenuItems>
            <MenuItems>Resources</MenuItems>
            <MenuItems>About Us</MenuItems>
            <MenuItems>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartCheckoutRounded />
              </Badge>
            </MenuItems>
          </Right>
          <LogoK src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Eo_circle_teal_letter-k.svg/1024px-Eo_circle_teal_letter-k.svg.png" />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
