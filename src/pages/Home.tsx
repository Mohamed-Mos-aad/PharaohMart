// ** Style 
import style from '../style/pages/home.module.css'
// ** Components
import Slider from '../components/Slider'
import HomeSection from '../components/HomeSection'



export default function Home() {
    return (
        <>
                <div className="global_container">
                    <main className={style.home}>
                        <Slider />
                        <HomeSection sectionTitle='Featured Categories'/>
                        <HomeSection sectionTitle='Best Sellers'/>
                        <HomeSection sectionTitle='Deals of the Day'/>
                        <HomeSection sectionTitle='New Arrivals'/>
                        <HomeSection sectionTitle='Recommended for You'/>
                    </main>
                </div>
        </>
    )
}