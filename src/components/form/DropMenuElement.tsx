// ** Assets
import downArrowIcon from '../../assets/icons/dashboard/products/downArrowIcon.svg'
// ** Style
import style from '../../style/components/form/dropMenuElement.module.css'
// ** Hooks && Tools
import { useState } from 'react'



// ** Interfaces
interface IDropMenuElement{
    title: string;
    selections: string[];
}



export default function DropMenuElement({title,selections}:IDropMenuElement) {
    // ** States
    const [dropMenuOpened,setDropMenuOpened] = useState<boolean>(false);
    const [selected,setSelected] = useState<string>(title);



    // ** Handlers
    const dropMenuToggleHandler = ()=>{
        setDropMenuOpened(!dropMenuOpened);
    }
    const selectHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>)=>{
        const selection = e.currentTarget.innerHTML;
        console.log(selection);
        setSelected(selection);
    }

    
    
    // ** Renders
    const selectionsRender = selections.map(selection => 
        <li key={selection} onClick={(e)=>{selectHandler(e)}}>{selection}</li>
    )



    return (
        <>
            <div className={`${style.drop_menu} ${dropMenuOpened ? style.opened : ''}`} onClick={dropMenuToggleHandler}>
                <h2>{selected}</h2>
                <img src={downArrowIcon} alt="downArrow icon" />
                <ul>
                    {selected != title && selected != "All" ? <li onClick={(e)=>{selectHandler(e)}}>All</li> : ''}
                    {selectionsRender}
                </ul>
            </div>
        </>
    )
}