// ** Style
import style from '../../style/components/navbar.module.css'
// ** Assets
import heartIcon from '../../assets/icons/navbar/heartIcon.svg'
import cartIcon from '../../assets/icons/navbar/cartIcon.svg'
import addAuthIcon from '../../assets/icons/navbar/addAuthIcon.svg'
import userIcon from '../../assets/icons/navbar/userIcon.svg'
// ** Components
import NavBarSearchElement from '../search/NavBarSearchElement'
// ** Hooks && Tools
import { memo, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks'
// ** Data
import { productCategories } from '../../data/fakeData'
// ** Api
import { getCategories } from '../../services/CategoriesService'



export default function NavBar() {
    // ** Defaults
    const MemoLink = memo(Link);
    const authState = localStorage.getItem("token");



    // ** States
    const [categories,setCategories] = useState([]);
    const [isMainMenuOpen,setIsMainMenuOpen] = useState<boolean>(true);
    const [isDropdownOpen,setIsDropdownOpen] = useState<boolean>(false);
    const cart = useAppSelector(state => state.cart);
    const favourite = useAppSelector(state => state.favourite);
    const [authPopOpened,setAuthPopOpened] = useState<boolean>(false);



    // ** Ref
    const dropdownRef = useRef<HTMLDivElement>(null);



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
    const logOutHandler = ()=>{
        localStorage.removeItem("token");
    }



    // ** Render
    const categoriesRender = productCategories.map(category => 
        <li onClick={dropDownMenuStateToggleHandler} key={category.name}>
            <Link 
                to={category.path}
                state={{ id: category.name, name: category.name, pathData: category.name }}
            >
                {category.name}
            </Link>
        </li>
    )



    // ** UseEffect
    useEffect(()=>{
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        const handleScroll = () => {
            setIsDropdownOpen(false);
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            window.addEventListener("scroll", handleScroll);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    },[isDropdownOpen])

    useEffect(()=>{
        if(window.innerWidth < 800)
        {
            setIsMainMenuOpen(false);
        }



        const fetchCategories = async () => {
            try {
                const categoriesData = await getCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error('فشل في جلب الأقسام:', error);
            }
        };

        fetchCategories();
    },[categories])



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
                    <div className={style.dropdown_menu} ref={dropdownRef}>
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
                                <MemoLink to={'/'}>Home</MemoLink>
                            </li>
                            <li onClick={dropDownMenuStateToggleHandler}>
                                Categories
                            </li>
                            <li onClick={menuStateToggleHandler}>
                                <MemoLink to={'/deals'}>Deals</MemoLink>
                            </li>
                            <li onClick={menuStateToggleHandler}>
                                <MemoLink to={'/services'}>Services</MemoLink>
                            </li>
                        </ul>
                        <div className={style.nav_part_2}>
                            <NavBarSearchElement />
                            <div className={style.options}>
                                <MemoLink to={'/favourite'} onClick={menuStateToggleHandler}>
                                    <img src={heartIcon} alt="heart icon" />
                                    {favourite.products.length > 0 && <span>{favourite.products.length}</span>}
                                </MemoLink>
                                <MemoLink to={'/cart'} onClick={menuStateToggleHandler}>
                                    <img src={cartIcon} alt="cart icon" />
                                    {cart.products.length > 0 && <span>{cart.products.length}</span>}
                                </MemoLink>
                                <div className={style.icon} onClick={()=>{setAuthPopOpened(prev => !prev)}}>
                                    { authState ?
                                        <img src={userIcon} alt="user icon" />
                                        :
                                        <img src={addAuthIcon} alt="addAuth icon" />
                                    }
                                </div>
                                {
                                    authPopOpened && 
                                    <div className={style.auth_options}>
                                        { authState ?
                                            <>
                                                <MemoLink to={'/u/login'} 
                                                onClick={()=>{
                                                    menuStateToggleHandler()
                                                    logOutHandler()
                                                }}>
                                                    Log Out
                                                </MemoLink>
                                            </>
                                            :
                                            <>
                                                <MemoLink to={'/u/login'} onClick={menuStateToggleHandler}>
                                                    Login
                                                </MemoLink>
                                                <MemoLink to={'/u'} onClick={menuStateToggleHandler}>
                                                    Sign Up
                                                </MemoLink>
                                            </>
                                        }
                                        
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }
            </nav>
        </>
    )
}