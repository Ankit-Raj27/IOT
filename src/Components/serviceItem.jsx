import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 2rem;
    max-width: 40rem;
    margin:1rem;
    border:none;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: .5rem;
`;

const Info = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Title = styled.h1`
`;
const Desc = styled.p``;

const Button = styled.button`
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border-radius: 7px;
  border: none;
  padding: 10px 20px;
  width: 9rem;
  background-color: #005DF2;
`;

const ServiceItem = ({ item }) => {
  return (
    <div>
      <Container>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>View Courses</Button>
          </Info>
      </Container>
    </div>
  );
};

export default ServiceItem;
