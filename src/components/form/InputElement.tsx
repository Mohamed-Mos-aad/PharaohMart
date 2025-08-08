// ** Style
import style from '../../style/components/form/inputElement.module.css'



// ** Interfaces
interface IInputElement{
    id: string;
    label: string;
    type: string;
    name: string;
    placeholder: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=> void
}



export default function InputElement({id,label,type,name,placeholder,onChange}:IInputElement) {
    return (
        <>
            <div className={style.input_element}>
                <label htmlFor={id}>{label}</label>
                <input type={type} name={name} id={id} placeholder={placeholder} onChange={(e)=>{onChange(e)}}/>
            </div>
        </>
    )
}