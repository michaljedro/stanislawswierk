import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/Container.styled'
import Photo from '../assets/2.png';
const Division = styled.div`
    display:flex;
    height:70vh;
    // border: 2px solid yellow;
`
const TextDiv = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const DivisionFlex = styled.div`
    display:flex;
    height:100%;
`
const PhotoDiv = styled.div`
    background-color: white;
    flex:1;
    display:flex;
    align-items: center;
    justify-content:center;
`
const PhotoImg = styled.img`
    height:70%;
`

function About() {
    return (
            <Division>
                <Container>
                    <DivisionFlex>
                        <TextDiv>
                            <p>Praesent pretium lectus nunc, quis euismod arcu venenatis at. Integer non nibh sit amet est feugiat dictum at a risus. Donec eleifend, arcu tempus volutpat elementum, leo leo sodales nisi, a suscipit nulla urna egestas ligula. Nulla venenatis lectus nunc, eget pharetra nibh porta non. In hac habitasse platea dictumst. Ut ullamcorper pulvinar ornare. Aliquam erat volutpat. Pellentesque egestas lobortis imperdiet. Nam imperdiet pellentesque ornare. Praesent in tempus odio.</p>
                        </TextDiv>
                        <PhotoDiv>
                            <PhotoImg src={Photo}/>
                        </PhotoDiv>
                    </DivisionFlex>
                </Container>
            </Division>
    )
}

export default About
