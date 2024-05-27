import './Information.css'

export default function Information({ tittle,description,url='javascript:void(0);'}) {
    const image = require(`./../assets/images/${tittle}.png`);
    return (  
        <div className='information'>
            <a target={url=='javascript:void(0);'?'':'_blank'} href={url}><img src={image} alt="" ></img></a>
            <div className='information-description'>
                <h5>{tittle.toUpperCase().replace(/_/g, " ")}</h5>
                <label>{description}</label>
            </div>
        </div>
    )
}