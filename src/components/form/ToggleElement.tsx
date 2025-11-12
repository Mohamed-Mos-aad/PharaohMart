// ** Style
import style from '../../style/components/form/toggleElement.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react';



// ** Interfaces
interface IToggleElement{
    title: string;
    onChange: (value:boolean)=> void
}
export default function ToggleElement({title,onChange}:IToggleElement) {
    // ** States
    const [inputToggle,setInputToggle] = useState<boolean>(false);



    // ** Handlers
    const changeToggleStateHandler = ()=>{
        setInputToggle(prev => !prev);
    }



    // ** UseEffect
    useEffect(()=>{
        onChange(inputToggle);
    },[inputToggle])



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