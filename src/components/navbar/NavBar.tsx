// ** Style
import style from '../../style/components/navbar.module.css'
// ** Assets
import searchIcon from '../../assets/icons/navbar/searchIcon.svg'
import heartIcon from '../../assets/icons/navbar/heartIcon.svg'
import cartIcon from '../../assets/icons/navbar/cartIcon.svg'
import addAuthIcon from '../../assets/icons/navbar/addAuthIcon.svg'
// ** Hooks && Tools
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// ** Data
import { productCategories } from '../../data/fakeData'



export default function NavBar() {
    // ** States
    const [isMainMenuOpen,setIsMainMenuOpen] = useState<boolean>(true);
    const [isDropdownOpen,setIsDropdownOpen] = useState<boolean>(false);



    // ** Handlers
    const menuStateToggleHandler = ()=>{
        if(window.innerWidth < 800)
        {
            setIsMainMenuOpen(!isMainMenuOpen);
        }
    }
    const dropDownMenuStateToggleHandler = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
        if(window.innerWidth < 800)
        {
            setIsMainMenuOpen(false);
        }
    }



    // ** Render
    const categoriesRender = productCategories.map(category => 
        <li onClick={dropDownMenuStateToggleHandler} key={category.name}>
            <Link 
                to={category.path}
                state={{ id: category.name, name: category.name }}
            >
                {category.name}
            </Link>
        </li>
    )



    // ** UseEffect
    useEffect(()=>{
        if(window.innerWidth < 800)
        {
            setIsMainMenuOpen(false);
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
                <div className={style.menu_btns} onClick={menuStateToggleHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {
                    isDropdownOpen &&
                    <div className={style.dropdown_menu}>
                        <ul>
                            {categoriesRender}
                        </ul>
                    </div>
                }
                {
                    isMainMenuOpen &&
                    <div className={style.nav_part}>
                        <ul className={style.menu}>
                            <li onClick={menuStateToggleHandler}>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li onClick={dropDownMenuStateToggleHandler}>
                                Shop
                            </li>
                            <li onClick={menuStateToggleHandler}>
                                <Link to={'/deals'}>Deals</Link>
                            </li>
                            <li onClick={menuStateToggleHandler}>
                                <Link to={'/services'}>Services</Link>
                            </li>
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