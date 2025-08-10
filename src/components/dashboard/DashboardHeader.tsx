// ** Style
import style from '../../style/components/dashboard/dashboardHeader.module.css'



// ** Interfaces
interface IDashboardHeader{
    title: string;
    description: string;
}



export default function DashboardHeader({title,description}:IDashboardHeader) {
    return (
        <>
            <div className={style.dashboard_header}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </>
    )
}