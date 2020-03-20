import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../img/logo.svg'
import profile from '../img/profile.svg'
import { FaChevronDown } from "react-icons/fa";
//import Navbar from 'react-bootstrap'; 
  const Navbar = () => {
    return(
        <>
                <nav className="navbar navbar-expand-sm bg-theme shadow  ">
                <Link to="/" className="navbar-expand- ml-5">
                    <img src={logo} alt="logo goes here" width="40px"/>
                </Link><b style={{fontSize:'13.5px'}}>Intugine </b> 
                
                <div >
                    <ul className="navbar-nav ">
                               
                                    <li style={{marginLeft:'870px' }} >
                                            <Link to='/' className="nav-link text-dark text-bold">
                                            <b style={{fontSize:'13.5px'}}> Home</b>
                                            </Link>
                                    </li>
                                    <li  >
                                            <Link to='/' className="nav-link text-dark ">
                                               <b style={{fontSize:'13.5px'}}>Brands</b> 
                                            </Link>
                                    </li>
                                    <li >
                                            <Link to='/' className="nav-link text-dark " >
                                              <b style={{fontSize:'13.5px'}}>Transporters </b>  
                                            {/* <img src={profile} alt="logo goes here" width='19px'  />  */}
                                            </Link>
                                    </li>
                                        <li>
                                           <div className="dot ">
                                           <img src={profile} alt="logo goes here" height="20" width="20"  /> 
                                           </div>
                                           </li>  
                                            
                                   
                                    <li style={{marginLeft:'10px'}}>
                                    {/* <Link> */}
                                    <FaChevronDown className="cart-icon mtop" />
                                    {/* </Link> */}
                                   
                                    </li>
                                
                            
                        
                        
                        
                                   
                    </ul>
                </div>
                
           </nav>
       </>
    )
}

export default Navbar;