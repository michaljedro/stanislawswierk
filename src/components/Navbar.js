import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import  {SidebarData}  from './SidebarData';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <div className='navbar'>
                <h3 className='logo'>Stanisław Świerk</h3>
                <ul className='nav-links'>
                {SidebarData.map((item) => {
                    const { id, title, path } = item;
                        return (
                                <Link to={path} key={id}className='list-item'>
                                    <li>{title}</li>
                                </Link>
                        );
                    })}
                </ul>
                <div className='hamburger' onClick={handleClick}>
                </div>
            </div>
    )  
}

export default Navbar


                                // <li key={id} >
                                //     <Link to={path} className='list-item'>
                                //     <span>{title}</span>
                                //     </Link>
                                // </li>
                            // <li key={id}>
                            // <a href={path}>{title}</a>
                            // </li>