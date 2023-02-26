import React from "react";
import styled from "styled-components";
import man from "./man.png";
import background1 from "../Images/background1.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background: url("${background1}");
`;

const Left = styled.div`
  display: flex;
`;

const Text1 = styled.h3`
  margin: 90px;
  display: flex;
  flex: 1;
  font-size: 8vh;
  position: absolute;
  right: 40%;
  
`;
const Text2 = styled.p`
  flex:1;
  position: relative
  flex-direction: column;
`;
const Wrapper = styled.div``;

const Button1 = styled.button`
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 30px;
  background-color: orange;
  padding-left:30px;
  padding-right:30px;
  padding-top:15px;
  padding-bottom:15px;
  color:white;
  border-radius:7px;
  border:none;
`;

const Button2 = styled.button`
  font-size: 20px;
  background-color: transparent;
  padding-left:30px;
  padding-right:30px;
  padding-top:15px;
  padding-bottom:15px;
  cursor: pointer;
  margin-left: 30px;
  color:blue;
  border-radius:7px;
  border-color:blue;
  
`;

const Right = styled.div``;

const Image1 = styled.img`
  display: flex;
  flex: 1;
  position: absolute;
  right: 10%;
  height: 100%;
`;
const Poster = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Text1>
              Improve your business performanceby empowering your people.
            </Text1>
            <Text2>
              Get curated courses and dedicated consultation for your employees
              at one place.
              <Button1>View Courses</Button1>
              <Button2>How it works?</Button2>
            </Text2>
          </Left>
          <Right>
            <Image1 src={man} alt="man"></Image1>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Poster;
