// ** Style
import style from '../../style/components/productCard.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router';
import { memo } from 'react';
// ** Interfaces
interface IProductCard{
    id: string;
    name: string;
    listDisplay?: boolean;
    price?: number;
    thumbnailImg?: string
}



function ProductCard({id,name,listDisplay,price,thumbnailImg}:IProductCard) {
    // ** Defaults
    const navigate = useNavigate();



    // ** Handlers
    const openProductHandler = (productId:string)=>{
        navigate(`/product/${productId}`)
    }



    return (
        <>
            <div className={`${style.card_item} ${listDisplay ? style.list_card_item : ''}`} onClick={()=>{openProductHandler(id)}}>
                <div className={style.card_img}>
                    <img src={thumbnailImg} alt={name} />
                </div>
                <h3>{name}</h3>
                <h4>{price &&  '$ ' + price}</h4>
            </div>
        </>
    )
}

export default memo(ProductCard)