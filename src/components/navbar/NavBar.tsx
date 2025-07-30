// ** Style
import style from '../../style/components/navbar.module.css'
// ** Assets
import searchIcon from '../../assets/icons/navbar/searchIcon.svg'
import heartIcon from '../../assets/icons/navbar/heartIcon.svg'
import cartIcon from '../../assets/icons/navbar/cartIcon.svg'
import addAuthIcon from '../../assets/icons/navbar/addAuthIcon.svg'
// ** Hooks && Tools
import { useEffect, useState } from 'react'



export default function NavBar() {
    // ** States
    const [menuOpened,setMenuOpened] = useState<boolean>(true);
    const [dropDownMenuOpened,setDropDownMenuOpened] = useState<boolean>(false);



    // ** Handlers
    const menuStateToggelHandler = ()=>{
        if(window.innerWidth < 800)
        {
            setMenuOpened(!menuOpened);
        }
    }
    const dropDownMenuStateToggelHandler = ()=>{
        setDropDownMenuOpened(!dropDownMenuOpened);
        if(window.innerWidth < 800)
        {
            setMenuOpened(false);
        }
    }



    // ** UseEffect
    useEffect(()=>{
        if(window.innerWidth < 800)
        {
            setMenuOpened(false);
        }
    },[])



    return (
        <>
            <nav>
                <div className={style.nav_part}>
                    <div className={style.logo}>
                        PharaohMart
                    </div>
                </div>
                <div className={style.menu_btns} onClick={menuStateToggelHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {
                    dropDownMenuOpened &&
                    <div className={style.dropdown_menu}>
                        <ul>
                            <li onClick={dropDownMenuStateToggelHandler}>clothes</li>
                            <li onClick={dropDownMenuStateToggelHandler}>cars</li>
                            <li onClick={dropDownMenuStateToggelHandler}>phones</li>
                        </ul>
                    </div>
                }
                {
                    menuOpened &&
                    <div className={style.nav_part}>
                        <ul className={style.menu}>
                            <li onClick={menuStateToggelHandler}>Home</li>
                            <li onClick={dropDownMenuStateToggelHandler}>Shop</li>
                            <li onClick={menuStateToggelHandler}>Deals</li>
                            <li onClick={menuStateToggelHandler}>Services</li>
                        </ul>
                        <div className={style.nav_part_2}>
                            <div className={style.search}>
                                <input type="text" placeholder="Search"/>
                                <img src={searchIcon} alt="search icon" />
                            </div>
                            <div className={style.options}>
                                <span>
                                    <img src={heartIcon} alt="heart icon" />
                                </span>
                                <span>
                                    <img src={cartIcon} alt="cart icon" />
                                </span>
                                <span>
                                    <img src={addAuthIcon} alt="addAuth icon" />
                                </span>
                            </div>
                        </div>
                    </div>
                }
            </nav>
        </>
    )
}