import './Button.css'

export default function Button({ tittle,url='#'}) {
    return (  
        <a href={url} className='button'>{tittle}</a>
    )
}