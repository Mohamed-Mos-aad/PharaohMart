// ** Style
import style from '../style/components/homeSection.module.css'
// ** Components
import CardSlider from './cardSlider/CardSlider';



// ** Interfaces
interface IHomeSection{
    sectionTitle: string;
    // data: {
    //     productImg: {
    //         src: string,
    //         alt: string
    //     },
    //     productName: string
    // }[];
}



export default function HomeSection({sectionTitle}:IHomeSection) {
    return (
        <>
            <section className={style.home_section}>
                <div className={style.title}>
                    <h2>{sectionTitle}</h2>
                </div>
                <CardSlider />
            </section>
        </>
    )
}
