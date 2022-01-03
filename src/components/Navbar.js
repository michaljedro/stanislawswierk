import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import  {SidebarData}  from './SidebarData';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container } from '../styles/Container.styled';
import { Nav, List, ItemList } from '../styles/Navbar.styled';
import './Navbar.css'
const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <Container>
            <Nav>
                <List>
                    {SidebarData.map((item)=> {
                        const {id,title,path} = item;
                        return(
                            <ItemList key={id}>
                                <Link to={path} className='white'>
                                    {title}
                                </Link>
                            </ItemList>
                        )
                    })}
                </List>
            </Nav>
        </Container>
    )
}

export default Navbar



