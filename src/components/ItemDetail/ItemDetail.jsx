import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import Loading from "../Loading/Loading.jsx";

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({product: 0, stock: 0});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const [quantity, setQuantity] = useState(1);
    const decrementQuantity = () => {
        if(quantity > 1 ){
            setQuantity(quantity - 1)
        }
    }
    const incrementQuantity = () => {
        if(quantity < product.stock){ //
            setQuantity(quantity + 1)
        }
    }
    const precioTotal = product.price * quantity;

    if (loading) {
        return  <div>
                    <Loading />
                </div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (

        <div className='container mx-auto my-[100px] max-w-[1170px]'>
            <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className="w-full rounded-[20px]" />
                </div>
                <div>
                    <p className="text-[10px]">{product.description}</p>
                    <h1 className="text-[40px] font-medium uppercase">{product.name}</h1>
                    <p>${product.price} CLP</p>
                    <div>
                        <h3>Tamaños disponibles:</h3>
                        <button>
                            <ul className='flex '>
                                {product.sizes.map((size, index) => (
                                    <li key={index}
                                        className='text-[15px] my-[20px]  border-[1px] w-[50px] flex justify-center mx-[10px] rounded '>{size}</li>
                                ))}
                            </ul>
                        </button>
                    </div>
                    <p className='text-[20px] my-[20px]'>Stock: {product.stock}</p>

                    <div className='inline-flex items-center border rounded-md shadow-md'>
                        <button onClick={decrementQuantity}
                            className=' rounded-l-md hover:bg-brown-600 w-[60px] h-[60px] text-[24px] flex justify-center items-center transition duration-200'> -
                        </button>
                        <p className='text-[24px] px-[15px] text-center'>{quantity}</p>
                        <button onClick={incrementQuantity}
                            className='rounded-r-md  w-[60px] h-[60px] text-[24px] flex justify-center items-center transition duration-200'> +
                        </button>
                    </div>

                    <p className='text-[20px] my-[20px]'>Precio: ${product.price} CLP por unidad</p>

                    <p className='text-[20px] my-[20px]'>Precio Total: ${precioTotal} CLP</p>

                    <button
                        className='bg-[#171e27] text-[#ffffff] text-[20px] px-[20px] py-[5px] hover:bg-[#172625]'>Comprar
                    </button>

                    <div className="bg-white m-10 border border-black mt-[100px] grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
                        <h1 className="text-center text-black text-xl font-bold col-span-6">Califica Producto</h1>
                        <textarea placeholder="Your feedback..." className="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"></textarea>
                        <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                            </svg>
                        </button>
                        <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
                        </button>
                        <span className="col-span-2"></span>
                        <button className="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-black focus:stroke-blue-200 focus:bg-blue-400">
                            <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"></path>
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M10.11 13.6501L13.69 10.0601"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}