import React, {useState} from 'react';
import SearchB from "../SearchB/SearchB.jsx"
import Nav from '../Nav/Nav.jsx';
import {Link} from "react-router-dom";

const Logo = './logojv.webp'
const Header = () => {

    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full pt-0 fixed position-fixed z-10 top-0 left-0'>
            <div className='md:flex items-center justify-between bg-[#723604] py-4 md:px-10 px-7'>
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    <Link to="/" className="text-3xl text-white mr-1 pt-2">
                        <img src={Logo} alt="Logo" className="w-10 h-8" />
                    </Link>
                </div>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute text-white right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? "close-outline":"menu-outline"}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <div>
                        <Nav>
                        </Nav>
                    </div>
                    <SearchB />
                </ul>
            </div>

        </div>
    )
}
export default Header;