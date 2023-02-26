import React from "react";
import styled from "styled-components";
import service from "../Images/service.png";

const Container = styled.div`
  display: flex;
  background: url("${service}");
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 50px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width:70%;
  height:auto;
  left: 100px;
  right: 100px;
`;

const Title1 = styled.h1``;
const Title2 = styled.h3`
  padding-top: 10px;
  font-weight: bold;
`;

const Desc = styled.p`
  padding-top: 30px;
  font-size:1.5rem ;
`;

const AboutContainer = () => {
  return (
    <div>
      <Container>
        <Title>
          <Title1> About Us. </Title1>
          <Title2>A brief about our vision, mission & us.</Title2>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            sed eget ut turpis eget feugiat aenean viverra. Sodales in urna nec,
            amet molestie varius. Vel auctor vitae ultrices eget senectus. Nisi,
            mattis lectus mi tellus quis ornare. Arcu tristique nulla duis eu
            nunc molestie. Donec dictumst sapien enim nec nibh sed arcu. Quis
            pretium ultrices velit non euismod. Amet at consectetur at tortor
            pharetra, nisl donec quam cras. Aliquet dolor etiam commodo nisl.
            <br/> <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            sed eget ut turpis eget feugiat aenean viverra. Sodales in urna nec,
            amet molestie varius. Vel auctor vitae ultrices eget senectus. Nisi,
            mattis lectus mi tellus quis ornare. Arcu tristique nulla duis eu
            nunc molestie. Donec dictumst sapien enim nec nibh sed arcu. Quis
            pretium ultrices velit non euismod. Amet at consectetur at tortor
            pharetra, nisl donec quam cras. Aliquet dolor etiam commodo nisl.
          </Desc>
        </Title>
      </Container>
    </div>
  );
};

export default AboutContainer;
