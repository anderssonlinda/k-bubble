import './Actions.css'

export default function Actions({wash, feed, party, train, toilet}){


    return(
        <div className="actions-wrapper">
            <div className="actions">
                <div onClick={wash} className="action">
                    {/* <img src="https://www.flaticon.com/svg/static/icons/svg/3672/3672260.svg" alt=""/> */}
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2868/2868940.svg" alt=""/>
                </div>
                <div onClick={feed} className="action">
                    {/* <img src="https://www.flaticon.com/svg/static/icons/svg/1147/1147934.svg" alt=""/> */}
                    <img src="https://www.flaticon.com/svg/static/icons/svg/878/878052.svg" alt=""/>
                </div>
                <div onClick={party} className="action">
                    {/* <img src="https://www.flaticon.com/svg/static/icons/svg/3699/3699065.svg" alt=""/> */}
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2836/2836310.svg" alt=""/>
                </div>
                <div onClick={train} className="action">
                    {/* <img src="https://www.flaticon.com/svg/static/icons/svg/3163/3163222.svg" alt=""/> */}
                    <img src="https://www.flaticon.com/svg/static/icons/svg/563/563777.svg" alt=""/>
                </div>
                <div onClick={toilet} className="action">
                    {/* <img src="https://www.flaticon.com/svg/static/icons/svg/538/538020.svg" alt=""/> */}
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3142/3142620.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}   