import './Party.css'


export default function Party({koalaImg}){

    document.body.style.backgroundImage= "url('https://img.freepik.com/free-vector/illustration-night-mountains-landscape-with-tent-camp-starry-sky_296045-251.jpg?size=626&ext=jpg')";

    return(
        
        <div className="party-wrapper">
            
            {koalaImg}
            <img className="discoball"src="https://www.flaticon.com/svg/static/icons/svg/3699/3699065.svg" alt=""/>
            <img className="bar" src="https://www.flaticon.com/svg/static/icons/svg/3673/3673663.svg" alt=""/>
            <div className="light1">
                <div style={{left: "30%"}} className="ray"></div>
            </div>

            <div className="light2"> 
                <div style={{right: "0%"}} className="ray"></div>
            </div>
        </div>
    )
}
