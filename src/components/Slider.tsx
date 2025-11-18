// ** Style 
import style from '../style/components/slider.module.css'
// ** Assets
import testImg from '../assets/images/test/homeSilderImg.png'



export default function Slider() {
    return (
        <>
            <div className={style.slider}>
                <div className={style.slide_bar}>
                    <div className={style.slide}>
                        <img 
                            src={testImg} 
                            alt="Slider image 1"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className={style.slide}>
                        <img 
                            src={testImg} 
                            alt="Slider image 1"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className={style.slide}>
                        <img 
                            src={testImg} 
                            alt="Slider image 1"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
