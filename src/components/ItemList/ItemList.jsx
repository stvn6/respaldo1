import Items from "../Item/Items"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading.jsx";

export default function ItemList({ products: initialProducts }){
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if(!initialProducts) {
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [initialProducts]);

    return(
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <div className="flex flex-wrap gap-3 mt-[20px]">
                    {products.map((prod) =>(
                        <Items {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
}