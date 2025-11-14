// ** Style
import style from '../../style/components/form/toggleElement.module.css'
// ** Hooks && Tools
import { useState } from 'react';



// ** Interfaces
interface IToggleElement{
title: string;
    value: boolean;
    onToggle: (value: boolean) => void;
    id?: string;
    name?: string;
    className?: string;
}
export default function ToggleElement({title, value, onToggle, ...rest}:IToggleElement) {
    // ** States
    const [inputToggle,setInputToggle] = useState<boolean>(value);



    // ** Handlers
    const changeToggleStateHandler = ()=>{
        setInputToggle(prev => {
            onToggle(!prev);
            return !prev
        });
    }



    return (
        <>
            <div className={style.toggle_input_element} {...rest}>
                <h3>{title}</h3>
                <div className={`${style.toggle_element} ${inputToggle && style.toggle_element_true}`} onClick={changeToggleStateHandler}>
                    <span></span>
                </div>
            </div>
        </>
    )
}