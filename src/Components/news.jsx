import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
`;
const Title = styled.h1`
`;




const News = () => {
  return (
    <div>
      <Container>
        <Title>
            Lates News.
        </Title>
      </Container>
    </div>
  )
}

export default News
