
import { Close } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";


const Container = styled.div`
position: fixed;
  top: 0;
  right: 0;
  bottom:0 ;
  left: 0;
  overflow: auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.9);
  border: #a0a0a0 solid 1px;
  margin: 0;
  display:none;

  &::before{
    content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: 0;
  }
  `;
const Wrapper = styled.div`
display: inline-block;
  vertical-align: middle;
  width: 50%;
  padding: 10px 15px;
  color: #FFF;
  border: none;
  background: transparent;`;
const SearchContainer = styled.div`
position: relative;
  width: 100%;
  margin: 0;`;
const Form = styled.form`
height: 4em;
  border: 1px solid #999;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  background-color: #fff;
  overflow: hidden;
`;
const Input = styled.input`
font-size: 14px;
  color: #ddd;
  border-width: 0;
  background: transparent;
`;
const SearchOverlay = () => {
  return (
    <Container id="search-overlay" className="block">
        <Wrapper className="centered">
            <SearchContainer id='search-box'>
                <Close />
                <Form method="get" action="/search" target="_top">
                    <Input name='q' placeholder='Search' type='text'>

                    </Input>
                </Form>
            </SearchContainer>
        </Wrapper>
    </Container>
  );
};

export default SearchOverlay;
