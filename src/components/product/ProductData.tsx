// ** Style
import style from '../../style/pages/product.module.css'



// ** Interfaces
interface IProductData{
    name:string | undefined;
    category:string;
    seller: string;
}



export default function ProductData({name, category, seller}:IProductData) {
    return (
        <>
            <div className={style.product_data}>
                <h2>Home <span>/</span> <div>{category}</div></h2>
                <h3>{name}</h3>
                <h4>{seller}</h4>
            </div>
        </>
    )
}
