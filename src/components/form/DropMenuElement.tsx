// ** Assets
import downArrowIcon from '../../assets/icons/dashboard/products/downArrowIcon.svg'
// ** Style
import style from '../../style/components/form/dropMenuElement.module.css'
// ** Hooks && Tools
import { useState } from 'react'



// ** Interfaces
interface IDropMenuElement{
    title: string;
    selections: { id: number; title: string }[];
    onSelect: (itemSelected: { id: number; title: string }) => void;
}



export default function DropMenuElement({title,selections,onSelect}:IDropMenuElement) {
    // ** States
    const [dropMenuOpened,setDropMenuOpened] = useState<boolean>(false);
    const [selected,setSelected] = useState<string>(title);



    // ** Handlers
    const dropMenuToggleHandler = ()=>{
        setDropMenuOpened(!dropMenuOpened);
    }
    const selectHandler = (id: number | null, title: string )=>{
        if(id)
        {
            onSelect({id,title});
            setSelected(title);
        }
    }

    
    
    // ** Renders
    const selectionsRender = selections.map(selection => 
        <li key={selection.title} onClick={()=>{selectHandler(selection.id,selection.title)}}>{selection.title}</li>
    )



    return (
        <>
            <div className={`${style.drop_menu} ${dropMenuOpened ? style.opened : ''}`} onClick={dropMenuToggleHandler}>
                <h2>{selected}</h2>
                <img src={downArrowIcon} alt="downArrow icon" />
                <ul>
                    {selected != title && selected != "All" ? <li onClick={()=>{selectHandler(null,"All")}}>All</li> : ''}
                    {selectionsRender}
                </ul>
            </div>
        </>
    )
}