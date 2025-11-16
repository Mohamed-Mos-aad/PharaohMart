// ** Assets
import downArrowIcon from '../../assets/icons/dashboard/help/downArrowIcon.svg'
// ** Style
import style from '../../style/components/form/dropTextElement.module.css'
// ** Hooks && Tools
import { useRef, useState } from 'react';



// ** Interfaces
interface IDropTextElement{
    title: string;
    description: string;
}



export default function DropTextElement({title,description}:IDropTextElement) {
    // ** States
    const [dropTextOpened,setDropTextOpened] = useState<boolean>(false);



    // ** Refs
    const contentRef = useRef<HTMLDivElement>(null);



    // ** Handlers
    const dropTextToggleHandler = ()=>{
        setDropTextOpened(!dropTextOpened);
    }



    return (
        <>
            <div
                ref={contentRef}
                className={`${style.drop_text} ${dropTextOpened ? style.opened : ''}`}
                style={{
                    maxHeight: dropTextOpened
                        ? `${contentRef.current?.scrollHeight}px`
                        : "51px",
                }}
                onClick={dropTextToggleHandler}
            >
                <h3>{title}
                    <span>
                        <img src={downArrowIcon} alt="down arrow icon" />
                    </span>
                </h3>
                <p>{description}</p>
            </div>
        </>
    )
}