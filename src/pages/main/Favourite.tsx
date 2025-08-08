// ** Style 
import style from '../../style/pages/favourite.module.css'
// ** Hooks && Tools
import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
// ** Assets
import listDisplayIcon from '../../assets/icons/category/listDisplayIcon.svg'
import cardDisplayIcon from '../../assets/icons/category/cardDisplayIcon.svg'
// ** Components
import ProductCard from '../../components/product/ProductCard';



export default function Favourite() {
    // ** States
    const favouriteProducts = useAppSelector(state => state.favourite);

    const [displayList,setDisplayList] = useState<boolean>(false);



    // ** Handlers
        const displayToggleHandler = (isList:boolean)=>{
        setDisplayList(isList);
    }



    // ** Renders
    const productsCardsRender = favouriteProducts.products.map(product =>{
        if(!favouriteProducts) return;
        
        return <ProductCard id={product.productId} name={product.name} price={product.price} listDisplay={displayList} key={product.productId}/>
    })



    return (
        <>
            <div className="global_container">
                <div className={style.favourite}>
                    <div className={style.category_data}>
                        <h3>Home <span>/</span><div>Favourite Products</div></h3>
                        <h2>Favourite Products</h2>
                    </div>
                    <div className={style.category_options}>
                        <div className={style.display_btns}>
                            <button onClick={()=>{displayToggleHandler(true)}}>
                                <img src={listDisplayIcon} alt="list display icon" />
                            </button>
                            <button onClick={()=>{displayToggleHandler(false)}}>
                                <img src={cardDisplayIcon} alt="card display icon" />
                            </button>
                        </div>
                    </div>
                    <div className={`${style.category_cards} ${displayList ? style.list_display : style.cards_display}`}>
                        {productsCardsRender}
                    </div>
                </div>
            </div>
        </>
    )
}