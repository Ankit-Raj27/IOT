import React from "react";
import styled from "styled-components";
import NewsItem from "./newsItem";
import { CardData } from "./data";
import { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  ${"" /* width:50%; */}
  height:50%;
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
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7
border-radius:50%;
display : flex;
justify-content: center;
align-items: center;
position : absolute;
top:0;
bottom:0;
margin:auto;
left : ${(props) => props.direction === "left" && "40px"};
right : ${(props) => props.direction === "right" && "40px"};
margin:auto;
cursor:pointer;
opacity: 0.5;
z-index :2;
`;

const News = () => {
  const [SlideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(SlideIndex > 0 ? SlideIndex - 1 : 2);
    } else {
      setSlideIndex(SlideIndex < 7 ? SlideIndex + 1 : 0);
    }
  };
  return (
    <div>
      <Container>
        <Title>Latest News.</Title>
      <Wrapper>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIos />
      </Arrow>
        <Card>
          {CardData.map((item) => (
            <NewsItem item={item} key={item.id} />
          ))}
        </Card>
        <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
      </Wrapper>
      </Container>
    </div>
  );
};

export default News;
