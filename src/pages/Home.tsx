// ** Style 
import style from '../style/pages/home.module.css'
// ** Components
import Slider from '../components/Slider'



export default function Home() {
    return (
        <>
            <main className={style.home}>
                <Slider />
            </main>
        </>
    )
}
