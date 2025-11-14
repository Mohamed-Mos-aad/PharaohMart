// ** Style
import style from "../style/pages/categoryProducts.module.css";
// ** Assets
import filterIcon from "../assets/icons/category/filterIcon.svg";
// ** Hooks && Tools
import { useState } from "react";




export default function FilterPop() {
    // ** States
    const [filterOpened, setFilterOpened] = useState<boolean>(false);



    // ** Handlers
    const changeFilterStateHandler = () => {
        setFilterOpened(!filterOpened);
    };



    return (
        <>
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
        </>
    )
}
