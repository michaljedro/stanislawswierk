import React from 'react'
import styled from 'styled-components';
import { Container } from '../styles/Container.styled';
import Photo from '../assets/1.png'
const Homecase = styled.div`
    // border: 6px solid pink;
    flex-basis:80%;
    display:flex;
    justify-content:space-between;
`
const Text = styled.div`
    // border: 1px solid pink;
    width:50%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`
function Home() {
    return (
        <Container>
            <Homecase>
                    <Text>
                        <h1>Stanisław Świerk</h1>
                        <p>Think Positive!</p>
                    </Text>
                    <div>
                        <img src={Photo}/>
                    </div>
            </Homecase>
        </Container>
    )
}

export default Home
