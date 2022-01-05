import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/Container.styled'
const Division = styled.div`
    display:flex;
    border: 5px solid green;
    height:100%;
`
const PhotoDiv = styled.div`
    background-color: white;
    flex-grow:1;
`
const TextDiv = styled.div`
    background-color:blue;
    flex-grow:1;
`
const DivisionFlex = styled.div`
    display:flex;
    border:1px solid pink;
    height:100%
`
function About() {
    return (
            <Division>
                <Container>
                    <DivisionFlex>
                        <TextDiv>
                            Text
                        </TextDiv>
                        <PhotoDiv>
                            Photo
                        </PhotoDiv>
                    </DivisionFlex>
                </Container>
            </Division>
    )
}

export default About
