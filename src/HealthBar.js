
export default function HealthStatus({status}){
    const style = {width: `${status/10 * 100}%`};

    return(
        <div className="health-bar-wrapper">
            <div className="health-bar" style={style}></div>
        </div>
    )
}