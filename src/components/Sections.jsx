import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const ItemText = styled.div`
   padding-top: 15vh;
    text-align: center;
`
const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("${props.bgImage}")`}

`
const Sections = ({backgroundi ,title, description, leftbin, rightbin}) => {
 
    return (
        <Wrap bgImage={backgroundi}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
            <ButtonGroup>
                <LeftButton>{leftbin}</LeftButton>
                {rightbin && <RightButton>{rightbin}</RightButton>}
                
            </ButtonGroup>
            </Fade>
            {rightbin && <DownArr src="https://www.svgrepo.com/show/80156/down-arrow.svg"/>}
            
            </Buttons>
        </Wrap>
    )
}

const ButtonGroup= styled.div`
display: flex;
margin-bottom: 30px;
@media (max-width: 768px){
    flex-direction: column;
}
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;

`
const RightButton= styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`
const DownArr= styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`

const Buttons = styled.div`

`
export default Sections
