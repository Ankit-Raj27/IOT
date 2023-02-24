import {
    Email,
    FacebookRounded,
    Instagram,
    LinkedIn,
    Phone,
    YouTube,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
padding-top:10px;
  height: 25px;
  background-color: #ecf3ff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
`;

const Info = styled.div`
  flex: 1;
`;
const Logo = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;
const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1000px;
`;

const Contacts = () => {
    return (
        <Container>
            <Logo>
                <Email />
            </Logo>
            <Info>demo@gssgroup.com</Info>
            <Logo>
                <Phone />
            </Logo>
            <Info>7894561236</Info>
            <Social>
                Follow us on :
                <Logo>
                    <Instagram />
                </Logo>
                <Logo>
                    <YouTube />
                </Logo>
                <Logo>
                    <FacebookRounded />
                </Logo>
                <Logo>
                    <LinkedIn />
                </Logo>
            </Social>
            <Info>
                Contact Us
            </Info>
        </Container>
    );
};

export default Contacts;
