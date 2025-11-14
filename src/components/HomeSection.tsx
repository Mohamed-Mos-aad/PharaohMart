// ** Style
import style from '../style/components/homeSection.module.css'
// ** Components
import CardSlider from './cardSlider/CardSlider';



// ** Interfaces
interface IHomeSection{
    sectionTitle: string;
    category: string;
}



export default function HomeSection({sectionTitle,category}:IHomeSection) {
    return (
        <>
            <section className={style.home_section}>
                <div className={style.title}>
                    <h2>{sectionTitle}</h2>
                </div>
                <CardSlider categoryId={category}/>
            </section>
        </>
    )
}
