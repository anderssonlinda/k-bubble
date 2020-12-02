import './Feed.css'
import FoodStall from './food-stall.png'
import eatingKoala from './K-burgs.gif'

export default function Feed({koalaImg}) {
    return(
        <div className="feed-wrapper">
            <img src={eatingKoala} alt="" className="character"/>
            <img className="food-stall" src={FoodStall} alt=""/>
            {/* <img className="food-stall" src="https://www.flaticon.com/svg/static/icons/svg/1505/1505965.svg" alt=""/> */}
        </div>
    )
}