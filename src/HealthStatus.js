
import HealthBar from './HealthBar.js'
import './HealthStatus.css'


export default function HealthStatus({hunger, boredom, dirty, toilet, healthPoints}){

    return(
        <aside className="health-status">
            <h2>Health status: {healthPoints}</h2>
            <h3>Hunger:</h3>
            <HealthBar status = {hunger} />
            <h3>Bored:</h3>
            <HealthBar status = {boredom} />
            <h3>Dirty:</h3>
            <HealthBar status = {dirty} />
            <h3>Toilet:</h3>
            <HealthBar status = {toilet} />
        </aside>
    )
}