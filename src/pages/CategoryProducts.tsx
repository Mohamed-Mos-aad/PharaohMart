// ** Style
import style from "../style/pages/categoryProducts.module.css";
// ** Assets
import listDisplayIcon from "../assets/icons/category/listDisplayIcon.svg";
import cardDisplayIcon from "../assets/icons/category/cardDisplayIcon.svg";
import sortIcon from "../assets/icons/category/sortIcon.svg";
import leftArrowIcon from "../assets/icons/category/leftArrowIcon.svg";
import rightArrowIcon from "../assets/icons/category/rightArrowIcon.svg";
// ** Components
import ProductCard from "../components/product/ProductCard";
// ** Hooks && Tools
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// ** Interfaces
import type { IProduct } from "../interfaces";
import { getSpecificCategoryProductsAction } from "../api/data/productActions";



export default function CategoryProducts() {
  // ** Defaults
  const { id } = useParams();
  const itemsPerPage = 10;

  // ** States
  const [displayList, setDisplayList] = useState<boolean>(false);
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  const [displayedData, setDisplayedData] = useState<IProduct[]>(productsData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalItems = productsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // ** Handlers
  const displayToggleHandler = (isList: boolean) => {
    setDisplayList(isList);
  };
  const changePageHandler = (dir: string) => {
    if (dir === "left" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (dir === "right" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  

  // ** Renders
  const productsCardsRender = displayedData?.map((product) => (
    <ProductCard
      id={product.documentId!}
      name={product.name}
      price={product.salePrice}
      listDisplay={displayList}
      key={product.id}
      thumbnailImg={product.mainImage?.url}
    />
  ));
  const paginationButtonsRender = () => {
    const buttons = [];
    const pageRange = 1;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      const left = Math.max(1, currentPage - pageRange);
      const right = Math.min(totalPages, currentPage + pageRange);

      buttons.push(1);

      if (left > 2) buttons.push("...");

      for (let i = left; i <= right; i++) {
        if (i !== 1 && i !== totalPages) {
          buttons.push(i);
        }
      }

      if (right < totalPages - 1) buttons.push("...");
      if (totalPages !== 1) buttons.push(totalPages);
    }

    return buttons.map((page, index) => {
      if (page === "...") {
        return (
          <span key={`ellipsis-${index}`} className={style.ellipsis}>
            ...
          </span>
        );
      }

      return (
        <button
          key={page}
          className={page === currentPage ? style.active_page : ""}
          onClick={() => setCurrentPage(Number(page))}
        >
          {page}
        </button>
      );
    });
  };



  // ** UseEffect
  useEffect(()=>{
    if(!id) return
    const getProducts = async ()=>{
      try{
        const result= await getSpecificCategoryProductsAction(id)
        setProductsData(result);
        setDisplayedData(result);
      }catch(error){
        console.log(error)
      }
    }
    getProducts()
  },[id])



  return (
    <>
      <div className="global_container">
        <div className={style.category_products}>
          <div className={style.category_data}>
            <h3>
              Home <span>/</span>
              <div>{id}</div>
            </h3>
            <h2>{id}</h2>
          </div>
          <div className={style.category_options}>
            <div className={style.display_btns}>
              <button
                onClick={() => {
                  displayToggleHandler(true);
                }}
              >
                <img src={listDisplayIcon} alt="list display icon" />
              </button>
              <button
                onClick={() => {
                  displayToggleHandler(false);
                }}
              >
                <img src={cardDisplayIcon} alt="card display icon" />
              </button>
            </div>
            <button>
              <img src={sortIcon} alt="sort icon" />
              Sort By
            </button>
          </div>
          <div
            className={`${style.category_cards} ${
              displayList ? style.list_display : style.cards_display
            }`}
          >
            {productsCardsRender}
          </div>
          <div className={style.category_pages_btns}>
            <button
              onClick={() => {
                changePageHandler("left");
              }}
            >
              <img src={leftArrowIcon} alt="left arrow icon" />
            </button>
            {paginationButtonsRender()}
            <button
              onClick={() => {
                changePageHandler("right");
              }}
            >
              <img src={rightArrowIcon} alt="right aArrow icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
