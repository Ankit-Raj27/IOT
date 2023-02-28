import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
// import { SliderItems } from "../data";
import { CardData } from "./data";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  gap: 10px;
  box-shadow: 5px 5px 5px 5px gray;
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

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.SlideIndex * -100}vw);
  transition: all 1s ease;
`;
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 95vh;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
  transition: 0.3s ease;
  overflow: hidden;
`;


const Image = styled.img``;


const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Info = styled.div`
  display: flex;
  margin: 10px;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Author = styled.p``;
const Carousel = () => {
  const [SlideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(SlideIndex > 0 ? SlideIndex - 1 : 2);
    } else {
      setSlideIndex(SlideIndex < 7 ? SlideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIos />
      </Arrow>

      <Wrapper SlideIndex={SlideIndex}>
        {CardData.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <Wrapper>
              <Image src={item.img} />
              <Info>
                <Desc>{item.desc}</Desc>
                <Author>{item.author}</Author>
                <Button>Read More</Button>
              </Info>
            </Wrapper>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};

export default Carousel;
