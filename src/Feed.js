import './Feed.css'
import FoodStall from './food-stall.png'

export default function Feed({koalaImg}) {
    return(
        <div className="feed-wrapper">
            {koalaImg}
            <img className="food-stall" src={FoodStall} alt=""/>
            {/* <img className="food-stall" src="https://www.flaticon.com/svg/static/icons/svg/1505/1505965.svg" alt=""/> */}
        </div>
    )
}