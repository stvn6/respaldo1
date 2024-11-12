import React from 'react';

const Texto = ({Titulo, Parrafo}) => {
    return (
        <>
            <div className="justify-center items-center text-center font-bold py-20">
                <div className="Titulo" >
                    <h1 className="text-5xl">{Titulo}</h1>
                </div>
                <div className="Parrafo">
                    <p className="text-3xl">{Parrafo}</p>
                </div>
            </div>
        </>
    )
}
export default Texto