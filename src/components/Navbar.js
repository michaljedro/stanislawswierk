import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import  {SidebarData}  from './SidebarData';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <div className='navbar'>
            <div className='container'>
                <h3 className='logo'>Stanisław Świerk</h3>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                {SidebarData.map((item) => {
                    const { id, title, path } = item;
                        return (
                                <li key={id}>
                                    <Link to={path}>
                                    <span>{title}</span>
                                    </Link>
                                </li>
                            // <li key={id}>
                            // <a href={path}>{title}</a>
                            // </li>
                        );
                    })}
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    znaczek
                </div>
            </div>
        </div>
    )  
}

export default Navbar
