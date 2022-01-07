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
    const toggleIcon = () => {
        setIsVisible(!isVisible);
        console.log(isVisible);
    }
    return (
        <nav>
            <div>
                <button onClick={toggleIcon}>
                    {isVisible?<FaTimes />:<FaBars />  }
                </button>
            </div>
            <div className={isVisible? 'sidenav':''}> 
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
        // <Header>
        //     <Container>
        //         <Nav>
        //             <List className={isVisible? }>
        //                 {SidebarData.map((item)=> {
        //                     const {id,title,path} = item;
        //                     return(
        //                         <ItemList key={id}>
        //                             <Link to={path} className='white'>
        //                                 {title}
        //                             </Link>
        //                         </ItemList>
        //                     )
        //                 })}
        //             </List>
        //         </Nav>
        //     </Container>
        // </Header>
    )
}

export default Navbar



