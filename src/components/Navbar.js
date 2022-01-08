import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import  {SidebarData}  from './SidebarData';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container } from '../styles/Container.styled';
import { Header, Nav, List, ItemList } from '../styles/Navbar.styled';
import './Navbar.css'
import { Btn } from '../styles/Home.styled';


const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisible = () => {
        setIsVisible(!isVisible);
    }
    return (
        <nav>
            <div>
                    <button className='openBtn' onClick={toggleVisible}>
                        <FaBars />
                    </button>
            </div>
            <div className={isVisible? 'openNav':'sidenav'}>
                <button className='closeBtn' onClick={toggleVisible}>
                    <FaTimes />
                </button>
                <ul> 
                    {SidebarData.map((link)=> {
                        const {title,id, path} = link;
                        return (
                            <li key={id}>
                                <a href={path}>{title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar



