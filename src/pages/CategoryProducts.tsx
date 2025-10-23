// ** Style
import style from "../style/pages/categoryProducts.module.css";
// ** Assets
import listDisplayIcon from "../assets/icons/category/listDisplayIcon.svg";
import cardDisplayIcon from "../assets/icons/category/cardDisplayIcon.svg";
import sortIcon from "../assets/icons/category/sortIcon.svg";
import leftArrowIcon from "../assets/icons/category/leftArrowIcon.svg";
import rightArrowIcon from "../assets/icons/category/rightArrowIcon.svg";
import filterIcon from "../assets/icons/category/filterIcon.svg";
// ** Components
import ProductCard from "../components/product/ProductCard";
// ** Hooks && Tools
import { useLocation } from "react-router-dom";
import { useState } from "react";
// ** Data
import { fakeData } from "../data/fakeData";
// ** Interfaces
import type { IProduct } from "../interfaces";



export default function CategoryProducts() {
  // ** Defaults
  const location = useLocation();
  const { state } = location;
  const categoryName = state.name as string;
  const pathName = state.pathData as string;
  const itemsPerPage = 10;

  // ** States
  const [displayList, setDisplayList] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const currentData: IProduct[] = fakeData;
  const filteredData = currentData.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [filterOpened, setFilterOpened] = useState<boolean>(false);

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
  const changeFilterStateHandler = () => {
    setFilterOpened(!filterOpened);
  };
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // ** Renders
  const productsCardsRender = paginatedData?.map((product) => (
    <ProductCard
      id={product.id}
      name={product.name}
      price={product.price.productPrice}
      listDisplay={displayList}
      key={product.id}
      thumbnailImg={{ src: product.mainImage, alt: product.name }}
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

  return (
    <>
      <div className="global_container">
        <div className={style.category_products}>
          <div className={style.category_data}>
            <h3>
              Home <span>/</span>
              <div>{pathName}</div>
            </h3>
            <h2>{categoryName}</h2>
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
          <div className={style.filter}>
            <button onClick={changeFilterStateHandler}>
              <img src={filterIcon} alt="filter icon" />
            </button>
            {filterOpened && (
              <ul>
                <li>
                  <h3>Price</h3>
                  <ul>
                    <li>Up to 25 EGP</li>
                    <li>25 to 50 EGP</li>
                    <li>50 to 100 EGP</li>
                    <li>100 to 200 EGP</li>
                    <li>200 to 300 EGP</li>
                    <li>300 to 400 EGP</li>
                  </ul>
                </li>
                <li>
                  <h3>Price</h3>
                  <ul>
                    <li>Up to 25 EGP</li>
                    <li>25 to 50 EGP</li>
                    <li>50 to 100 EGP</li>
                    <li>100 to 200 EGP</li>
                    <li>200 to 300 EGP</li>
                    <li>300 to 400 EGP</li>
                  </ul>
                </li>
                <li>
                  <h3>Price</h3>
                  <ul>
                    <li>Up to 25 EGP</li>
                    <li>25 to 50 EGP</li>
                    <li>50 to 100 EGP</li>
                    <li>100 to 200 EGP</li>
                    <li>200 to 300 EGP</li>
                    <li>300 to 400 EGP</li>
                  </ul>
                </li>
                <li>
                  <h3>Price</h3>
                  <ul>
                    <li>Up to 25 EGP</li>
                    <li>25 to 50 EGP</li>
                    <li>50 to 100 EGP</li>
                    <li>100 to 200 EGP</li>
                    <li>200 to 300 EGP</li>
                    <li>300 to 400 EGP</li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
