// ** Style
import { useState } from 'react';
import style from '../style/components/homeSection.module.css'
// ** Components
import CardSlider from './cardSlider/CardSlider';



// ** Interfaces
interface IHomeSection{
    sectionTitle: string;
    category: string;
}



export default function HomeSection({sectionTitle,category}:IHomeSection) {
    const [isHidden,setIsHidden] = useState<boolean>(false);


    if(!category) return null;
    return (
        <>
        {
            !isHidden &&
            <section className={style.home_section}>
                <div className={style.title}>
                    <h2>{sectionTitle}</h2>
                </div>
                <CardSlider categoryId={category} setIsHidden={()=>{setIsHidden(true)}}/>
            </section>
        }
        </>
    )
}
