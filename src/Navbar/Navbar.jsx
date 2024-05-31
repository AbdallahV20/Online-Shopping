import './Navbar.css'
import Logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping} from '@fortawesome/free-solid-svg-icons';
import DropdownLink from './DropdownLink';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
export default function Navbar() {
    useEffect(()=>{
        [...document.querySelectorAll(".navbar-nav li > a")].map(el=>el.addEventListener("click",()=>{
            [...document.querySelectorAll(".navbar-nav li > a")].map(el=>el.classList.remove("active"))
            el.classList.add("active")
        }))
    },[])
    return (
        <header className="nav-bar py-2">
            <div className="container flex-column flex-lg-row d-md-flex justify-content-between">
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid p-0">
                        <NavLink className="navbar-brand order-lg-2 d-lg-none" to="/">
                            <img className='logo' src={Logo} alt="logo" height={50}></img>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className='nav-item'><NavLink className="nav-link" to="/">Home</NavLink></li>
                                <DropdownLink label={"MinaSpace"}/>
                                <DropdownLink label={"Shop"}/>
                                <DropdownLink label={"Blogs"}/>
                                <DropdownLink label={"Pages"}/>
                            </ul>
                        </div>
                    </div> 
                </nav>

                <NavLink className=" mx-3 d-none d-lg-block" to="/">
                    <img className='logo' src={Logo} alt="logo" height={50}></img>
                </NavLink>

                <div className='d-flex align-items-center justify-content-between'>
                    <div className='search'>
                        <input className="form-control ps-5 py-2" type="text" placeholder="Search..." aria-label="default input example"></input>
                    </div>
                    <div className='icons '>
                        <a href='#' className='me-3'><FontAwesomeIcon icon={faStar}/></a>
                        <NavLink to='/dashboard'><FontAwesomeIcon icon={faBagShopping} /></NavLink>
                    </div>
                </div> 
            </div>
        </header>
    )
}