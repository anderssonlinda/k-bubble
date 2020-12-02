import './Toilet.css'

export default function Toilet({koalaImg}) {
    return(
        <div className="toilet-wrapper">
            {koalaImg}
            <img className="poop"src="https://www.flaticon.com/svg/static/icons/svg/3004/3004425.svg" alt=""/>
        </div>
    )
}