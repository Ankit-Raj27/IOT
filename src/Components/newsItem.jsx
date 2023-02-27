import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
box-shadow: 5px 5px 5px 5px gray;
position:relative;
gap:10px;
display: flex;
flex:1;
flex-direction: column;
justify-content: space-between;
${'' /* left:10px; */}
background-color:yellow;
${'' /* width:12%; */}
${'' /* align-items: center; */}
`;

const Wrapper = styled.div`
`;
const Image = styled.img`
height:150px;
width:200px;

`;
const Info = styled.div`
display:flex;
margin:10px;
position: relative;
flex-direction: column;
flex-wrap: wrap;
`;
const Desc = styled.p`
width:100%;
`;
const Author = styled.p`
`;
const Button = styled.button`
display:flex;
justify-content: center;
align-items: center;
width: 50%;
padding: 10px;
border-radius: 5px;
background-color: #005DF2;
color:white;
border:none;
${'' /* border: 1px solid black; */}
  
`;

const NewsItem = ({item}) => {
  return (
    <div>
      <Container>
      <Wrapper>

        <Image src={item.img} />
        <Info>
          <Desc>{item.desc}</Desc>
          <Author>{item.author}</Author>
          <Button>Read More</Button>
        </Info>
      </Wrapper>
      </Container>
    </div>
  )
}

export default NewsItem
