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
                        <HomeSection category='Electronics' sectionTitle='Featured Categories'/>
                        <HomeSection category='Home' sectionTitle='Best Sellers'/>
                        <HomeSection category='Outdoor' sectionTitle='Deals of the Day'/>
                        <HomeSection category='Wearables' sectionTitle='New Arrivals'/>
                        <HomeSection category='Kitchen' sectionTitle='Recommended for You'/>
                    </main>
                </div>
        </>
    )
}