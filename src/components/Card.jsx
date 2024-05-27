import './Card.css'

export default function Card({ logo = '', tittle, description, time }) {
    const image=logo!==''?<div><img src={logo} alt="description" /></div>:''
    return (
        <div className='card'> 
            {image}
            <aside>
                <h4>{tittle}</h4>
                <p>{description}</p>
            </aside>
            <div>
                <label>{time}</label>
            </div>
        </div>
    )
}