import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import  {SidebarData}  from './SidebarData';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isMobile, setIsMobile] = useState(true);

    return (
        <div className='container'>
            <div className='navbar'>
                    <h3 className='logo'>Stanisław Świerk</h3>
                    <ul className={isMobile? 'nav-links-mobile': 'nav-links'}
                    >
                    {SidebarData.map((item) => {
                        const { id, title, path } = item;
                            return (
                                    <Link to={path} key={id}className='list-item'>
                                        <li>{title}</li>
                                    </Link>
                            );
                        })}
                        </ul>
                    <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
                        {isMobile ?<FaTimes className='icon'/>: <FaBars className='icon'/>}
                    </button>
                </div>
        </div>
    )  
}

export default Navbar


