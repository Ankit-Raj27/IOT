// import { ArrowBackIos } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

// const Arrow = styled.button`
// width:50px;
// height:50px;
// background-color:#fff7f7
// border-radius:50%;
// display : flex;
// justify-content: center;
// align-items: center;
// position : absolute;
// top:0;
// bottom:0;
// margin:auto;
// ${'' /* left : ${(props) => props.direction === "left" && "40px"};
// right : ${(props) => props.direction === "right" && "40px"}; */}
// margin:auto;
// cursor:pointer;
// opacity: 0.5;
// z-index :2;
// `;

const Container = styled.div`
  ${"" /* background-color: black; */}
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none;
  flex-shrink:0;
  flex-grow:1;
`;
const Image = styled.img`
  height: 100px;
  width: 100px;
`;
const Info = styled.div``;
const Name = styled.h2``;
const Desc = styled.p``;
const FeedbackItem = ({ item }) => {
  
  return (
    <div>

      {/* <Arrow className="left-arrow">
        <ArrowBackIos />
      </Arrow> */}
      <Container className="carousel-content-wrapper">
        <Content className="carousel-content">
          <Image src={item.img} />
          <Info>
            <Name>{item.name}</Name>
            <Desc>{item.desc}</Desc>
          </Info>
        </Content>
      </Container>
      {/* <Arrow className="right-arrow">
        <ArrowBackIos />
      </Arrow> */}
    </div>
  );
};

export default FeedbackItem;
