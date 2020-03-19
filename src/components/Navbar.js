import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../img/logo.svg'
import profile from '../img/profile.svg'
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
                                    <li style={{marginLeft:'870px'}} >
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
                                            <img src={profile} alt="logo goes here" width='19px'  /> 
                                            </Link>
                                    </li>
                                    {/* <li >
                                            <Link to='/' className="nav-link text-dark " >
                                            <img src={profile} alt="logo goes here" width='19px'  /> 
                                            </Link>
                                    </li> */}
                                    <li>
                                    <i class="fas fa-angle-down"></i>
                                    </li>
                                
                            
                        
                        
                        

                    </ul>
                </div>
                
           </nav>
       </>
    )
}

export default Navbar;