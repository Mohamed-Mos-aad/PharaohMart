// ** Style
import style from '../../style/components/form/toggleElement.module.css'
// ** Hooks && Tools
import { useState } from 'react';



// ** Interfaces
interface IToggleElement{
    title: string;
}
export default function ToggleElement({title}:IToggleElement) {
    // ** States
    const [inputToggle,setInputToggle] = useState<boolean>(false);



    // ** Handlers
    const changeToggleStateHandler = ()=>{
        setInputToggle(!inputToggle);
    }



    return (
        <>
            <div className={style.toggle_input_element}>
                <h4>{title}</h4>
                <div className={`${style.toggle_element} ${inputToggle && style.toggle_element_true}`} onClick={changeToggleStateHandler}>
                    <span></span>
                </div>
            </div>
        </>
    )
}