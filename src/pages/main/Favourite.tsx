// ** Style 
import style from '../../style/pages/favourite.module.css'
// ** Hooks && Tools
import { useState } from 'react';
// ** Assets
import listDisplayIcon from '../../assets/icons/category/listDisplayIcon.svg'
import cardDisplayIcon from '../../assets/icons/category/cardDisplayIcon.svg'
import sortIcon from '../../assets/icons/category/sortIcon.svg'
// ** Components
import ProductCard from '../../components/product/ProductCard';
// ** Data
import { fakeData } from '../../data/fakeData';



export default function Favourite() {
    // ** Defaults
    const categoryName = 'Home & Living' as string;



    // ** States
    const [displayList,setDisplayList] = useState<boolean>(false);



    // ** Handlers
        const displayToggleHandler = (isList:boolean)=>{
        setDisplayList(isList);
    }



    // ** Renders
    const productsCardsRender = fakeData.map(product =>{
        if(!categoryName) return;

        if(product.category === categoryName)
        {
            return(
                <ProductCard id={product.id} name={product.name} price={product.price.productPrice} listDisplay={displayList} key={product.id}/>
            )
        }
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
                        <button>
                            <img src={sortIcon} alt="sort icon" />
                            Sort By
                        </button>
                    </div>
                    <div className={`${style.category_cards} ${displayList ? style.list_display : style.cards_display}`}>
                        {productsCardsRender}
                    </div>
                </div>
            </div>
        </>
    )
}