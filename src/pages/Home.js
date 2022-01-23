import React from 'react'
import './Home.css'
import styled from 'styled-components';
import { device } from '../styles/Breakpoints.styled';
import { Container } from '../styles/Container.styled';
import {PhotoItem} from '../styles/Home.styled'
import Photo from '../assets/1.png'


function Home() {
    return (
        <main className='main container'>
            <div className='text'> 
                <h4>Stanisław Świerk</h4>
                <p> Myśl pozytywnie!</p>
            </div>
            <div className='photo'>
                <div className='empty'>
                    <img src={Photo} className='stachu' />
                </div>
            </div>
        </main>
    )
}

export default Home
