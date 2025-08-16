// ** Style
import style from '../../style/components/navbar.module.css'
// ** Assets
import searchIcon from '../../assets/icons/navbar/searchIcon.svg'
// ** Hooks && Tools
import { useState, memo } from 'react';
import { useNavigate } from 'react-router';




function NavBarSearchElement() {
    // ** Defaults
    const navigate = useNavigate();



    // ** States
    const [searchValue,setSearchValue] = useState<string>('');



    // ** Handlers
    const changeInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.currentTarget.value;
        setSearchValue(value);
    }
    const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter')
        {
            navigate(`categories/${searchValue}`, {
                state: { id: 'Search', name: searchValue, pathData: 'Search' }
            });
        }
    }



    return (
        <>
            <div className={style.search}>
                <input type="text" value={searchValue} onChange={(e)=>changeInputValueHandler(e)} onKeyDown={(e)=>searchHandler(e)} placeholder="Search"/>
                <img src={searchIcon} alt="search icon"/>
            </div>
        </>
    )
}


export default memo(NavBarSearchElement);