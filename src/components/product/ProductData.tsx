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
                <h3>Home <span>/</span> <div>{category}</div></h3>
                <h2>{name}</h2>
                <h4>{seller}</h4>
            </div>
        </>
    )
}
