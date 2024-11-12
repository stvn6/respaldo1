import React from 'react';
import ItemsContainer from "../Item/ItemsContainer.jsx";

const Logo = './logojv.webp'
const Footer = () => {
    return (
        <footer className="bg-[#723604] text-white items-center">
            <ItemsContainer />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center items-center pt-2 text-white text-sm pb-5">
                <span className="flex justify-center items-center text-2xl">
                        <img src={Logo} alt="Logo" className="w-10  h-7"/>
                </span>
                <span>© 2024 Appy. All rights reserved.</span>
                <span>Term. Privacy Policy</span>
            </div>
        </footer>
    )
}
export default Footer;