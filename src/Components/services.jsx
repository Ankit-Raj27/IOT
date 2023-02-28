import React from "react";
import service from "../Images/service.png";
import styled from "styled-components";
import { Service } from "./data";
import ServiceItem from "./serviceItem";

const Container = styled.div`
  background: url("${service}");
  display: flex;
  justify-content: center;
  border: none;
`;

const Wrapper = styled.div`
  width: 90%;

  height: 90%;
  background: white;
  top: 5%;
  ${'' /* left: 5%; */}
  bottom: 30%;
  opacity: 1;
  border: 1px solid black;
  box-shadow: 5px 5px 5px 5px gray;
`;

const Title1 = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-size: 40px;
`;

const Title2 = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
`;

const ServiceItemContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Services = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title1>Our Services.</Title1>
          <Title2>Making you industry ready is our responsibility</Title2>
          <ServiceItemContainer>
            {Service.map((item) => (
              <ServiceItem item={item} key={item.id} />
            ))}
          </ServiceItemContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Services;
