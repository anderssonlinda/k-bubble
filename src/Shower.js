import './Shower.css'
import showerKoala from './K-bubble-min.gif'

export default function Shower() {
    return(
        <div className="koala-shower">
            <div className="shower">
                <div className="water water-one"><img src="https://www.flaticon.com/svg/static/icons/svg/427/427112.svg" alt=""/></div>
                <div className="water water-two"><img src="https://www.flaticon.com/svg/static/icons/svg/427/427112.svg" alt=""/></div>
                <div className="water water-three"><img src="https://www.flaticon.com/svg/static/icons/svg/427/427112.svg" alt=""/></div>
                <div className="water water-four"><img src="https://www.flaticon.com/svg/static/icons/svg/427/427112.svg" alt=""/></div>
                <div className="water water-five"><img src="https://www.flaticon.com/svg/static/icons/svg/427/427112.svg" alt=""/></div>
            </div>
            <img className="character"  src={showerKoala} alt=""/>
        </div>
    )
}