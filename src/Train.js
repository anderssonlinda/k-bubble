import './Train.css'
import trainingKoala from './K-gainz-min.gif'

export default function Train(){
    return( 
        <div className="train-wrapper">
            <img src={trainingKoala} alt="" className="character"/>
            <img className="weigths" src="https://www.flaticon.com/svg/static/icons/svg/2738/2738580.svg" alt=""/>
        </div>
    )
}