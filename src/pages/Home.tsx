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
                        <HomeSection category='Beauty' sectionTitle='Featured Categories'/>
                        <HomeSection category='Fragrances' sectionTitle='Best Sellers'/>
                        <HomeSection category='Furniture' sectionTitle='Deals of the Day'/>
                        <HomeSection category='Groceries' sectionTitle='New Arrivals'/>
                        <HomeSection category='Groceries' sectionTitle='Recommended for You'/>
                    </main>
                </div>
        </>
    )
}