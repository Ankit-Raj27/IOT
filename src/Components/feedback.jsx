import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import background4 from "../Images/background4.png";
import { feedback } from "./data";
import FeedbackItem from "./feedbackItem";
import { useState } from "react";


const Container = styled.div`
  background: url("${background4}");
  overflow: hidden;
`;

const Title = styled.div``;

const Title1 = styled.h1`
  display: flex;
  justify-content: center;
`;
const Title2 = styled.h4`
  display: flex;
  justify-content: center;
`;

const Arrow = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
`;

const Review = styled.div`
  background-color: yellow;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const Feedback = (props) => {
  // const { children } = props;
  const [SlideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(SlideIndex > 0 ? SlideIndex - 1 : 2);
    } else {
      setSlideIndex(SlideIndex < 2 ? SlideIndex + 1 : 0);
    }
  };
  

  return (
    <div>
      <Container>
        <Title>
          <Title1>What our customer say?</Title1>
          <Title2>
            We belive in 100% client satisfaction and here is what they say
            about us.
          </Title2>
          <Arrow className="left-arrow" direction="left" onClick={() => handleClick("left")}>
            <ArrowBackIos />
          </Arrow>
          <Review className="carousel-container">
            <Wrapper className="carousel-wrapper">
              {feedback.map((item) => (
                <FeedbackItem item={item} key={item.id} />
              ))}
            </Wrapper>
          </Review>
          <Arrow className="right-arrow" direction="right" onClick={() => handleClick("right")}>
            <ArrowForwardIos />
          </Arrow>
        </Title>
      </Container>
    </div>
  );
};

export default Feedback;
