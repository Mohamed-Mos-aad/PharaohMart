// ** Style
import style from '../../style/components/form/textAreaInputElement.module.css'



// ** Interfaces
interface ITextAreaInputElement{
    id: string;
    label: string;
    name: string;
    placeholder: string;
    onChange: (e:React.ChangeEvent<HTMLTextAreaElement>)=> void
}



export default function TextAreaInputElement({id,label,name,placeholder,onChange}:ITextAreaInputElement) {
    return (
        <>
            <div className={style.text_area_input_element}>
                <label htmlFor={id}>{label}</label>
                <textarea name={name} id={id} placeholder={placeholder} onChange={(e)=>{onChange(e)}}></textarea>
            </div>
        </>
    )
}