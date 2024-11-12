import Item from './Item.jsx';
import {Products, Resources,Support} from "../Header/Menus.js"
const ItemsContainer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:px-8 px-5 py-16 ml-[200px]">
            <Item Links={Products} title="Productos" />
            <Item Links={Resources} title="Recursos" />
            <Item Links={Support} title="Redes Sociales" />
        </div>
    )
}
export default ItemsContainer