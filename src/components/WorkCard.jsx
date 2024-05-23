import './WorkCard.css'

export default function WorkCard({logo,servicio,detalle,tiempo}){
    return(
        <div className='work-card row p-3'>
            <img src={logo} alt="" className='col-12 col-md-1' / >
            <aside className='col-12 col-md-7'>
                <h4>{servicio}</h4>
                <p htmlFor="">{detalle}</p>
            </aside>
            <label className='col-12 col-md-2'>{tiempo}</label>
        </div>
    )
}