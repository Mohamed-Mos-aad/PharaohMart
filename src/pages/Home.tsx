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
                    <HomeSection category='' sectionTitle='Featured Categories'/>
                    <HomeSection category='' sectionTitle='Best Sellers'/>
                    <HomeSection category='' sectionTitle='Deals of the Day'/>
                    <HomeSection category='' sectionTitle='New Arrivals'/>
                    <HomeSection category='' sectionTitle='Recommended for You'/>
                </main>
            </div>
        </>
    )
}