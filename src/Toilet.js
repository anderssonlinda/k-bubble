import './Toilet.css'
import toiletKoala from './K-poop.gif'

export default function Toilet() {
    return(
        <div className="toilet-wrapper">
            <img src={toiletKoala} alt="" className="toilet-koala"/>
        </div>
    )
}