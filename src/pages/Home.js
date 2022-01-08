import React from 'react'
import styled from 'styled-components';
import { device } from '../styles/Breakpoints.styled';
import { Container } from '../styles/Container.styled';
import {PhotoItem} from '../styles/Home.styled'
import Photo from '../assets/1.png'


const HomePage = styled.div`
    background-color:pink;
    flex:1;
`
function Home() {
    return (
        <div>
            Home
        </div>
    )
}

export default Home
