import React from "react";
import styled from "styled-components";
import NewsItem from "./newsItem";
import { CardData } from "./data";

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  ${"" /* width:50%; */}
  flex:1;
  align-items: center;
  justify-content: center;
  background-color: orange;
  position: relative;
  overflow: hidden;
  flex-direction: row;
`;
const Wrapper = styled.div`
justify-content: flex-start;

`;
const Title = styled.h1`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Card = styled.div`
  margin-top: 90px;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  margin-left: 40px;
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  ${"" /* display: flex; */}
  ${"" /* flex: 1; */}
 position:relative;
  justify-content: space-between;
`;

const News = () => {
  return (
    <div>
      <Container>
        <Title>Latest News.</Title>
      <Wrapper>
        <Card>
          {CardData.map((item) => (
            <NewsItem item={item} key={item.id} />
          ))}
        </Card>
      </Wrapper>
      </Container>
    </div>
  );
};

export default News;
