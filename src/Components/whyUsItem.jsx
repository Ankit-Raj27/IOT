import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
    gap: 2rem;
    max-width: 40rem;
    margin:1rem;
    border:none;
    margin-bottom:70px;
    `;

const Image = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h1``;
const Desc = styled.p``;

const Anchor = styled.a``;

const WhyUsItem = ({ item }) => {
  return (
    <div>
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Anchor>{item.link}</Anchor>
        </Info>
      </Container>
    </div>
  );
};

export default WhyUsItem;
