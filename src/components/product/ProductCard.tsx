// ** Style
import style from '../../style/components/productCard.module.css'
// ** Assets
import testImg from '../../assets/images/test/sellerTestImg.png'
// ** Hooks && Tools
import { useNavigate } from 'react-router';



// ** Interfaces
interface IProductCard{
    id: string;
    name: string;
    listDisplay?: boolean;
    price?: number;
}



export default function ProductCard({id,name,listDisplay,price}:IProductCard) {
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
                    <img src={testImg} alt="test img" />
                </div>
                <h3>{name}</h3>
                <h4>{price &&  '$ ' + price}</h4>
            </div>
        </>
    )
}