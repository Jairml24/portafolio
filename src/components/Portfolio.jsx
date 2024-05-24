import  './Portfolio.css'
import maestroAbad from './../assets/images/projects/maestro_abad.png'
import maestroAmarres from './../assets/images/projects/maestro_amarres.png'

export default function Portfolio() {
  return (
    <div id='portafolio' className='portfolio'>
      <h2>MI PORTAFOLIO</h2>
      <img src={maestroAbad} />
      <img src={maestroAmarres} />
      <img src={maestroAmarres} />
    </div>

  )
}