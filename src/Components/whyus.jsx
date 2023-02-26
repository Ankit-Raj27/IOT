import React from "react";
import styled from "styled-components";
import whyus from "../Images/whyus.png";
import { WhyusData } from "./data";
import WhyUsItem from "./whyUsItem";

const Container = styled.div`
  padding-top: 40px;
  position: relative;
  background: #e9f1ff;
  padding-bottom: 5px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  left: 100px;
  right: 100px;
`;

const Title1 = styled.h1``;

const Title2 = styled.h3`
  padding-top: 10px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  margin-left: 200px;
  margin-right: -100px;
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  margin-top:30px;
  margin-left:-100px;
`;
const Whyus = () => {
  return (
    <div>
      <Container>
        <Title>
          <Title1>Why Us?</Title1>
          <Title2>Global Success Systems Advantage</Title2>
        </Title>
        <Wrapper>
          <Left>
            <img src={whyus} alt="whyus" />
          </Left>
          <Right>
            {WhyusData.map((item) => (
              <WhyUsItem item={item} key={item.id} />
            ))}
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Whyus;
