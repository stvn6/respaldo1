import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav>
            <ul className="flex">
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-white transition duration-300 ease-linear hover:text-teal-200 hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/">Home</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-white transition duration-300 ease-linear hover:text-teal-200 hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/products">Tienda</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-white transition duration-300 ease-linear hover:text-teal-200 hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/category/grano">Grano</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-white transition duration-300 ease-linear hover:text-teal-200 hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/category/liofilizado">Liofilizado</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-white transition duration-300 ease-linear hover:text-teal-200 hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/category/molido">Molido</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-white transition duration-300 ease-linear hover:text-teal-200 hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/about">About</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-white transition duration-300 ease-linear hover:text-teal-200 hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}