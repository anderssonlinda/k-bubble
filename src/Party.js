import './Party.css'
import darkBackground from './Dark DG-min.jpg'
import djKoala from './DJ-K-bubb-min.gif'

export default function Party({koalaImg}){

    document.body.style.backgroundImage= `url('${darkBackground}')`;

    return(
        
        <div className="party-wrapper">
            
            <img className="character" src={djKoala} alt=""/>

            <div className="light1">
                <div style={{left: "45%"}} className="ray"></div>
            </div>

            <div className="light2"> 
                <div style={{right: "0%"}} className="ray"></div>
            </div>
        </div>
    )
}
