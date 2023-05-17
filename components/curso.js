
import styles from '../styles/curso.module.css'



export default function Curso({curso}) {

    console.log(curso)


  const { titulo, contenido, imagen } = curso

  return (
    <section className={`${styles.curso} curso`}>
    <style jsx>{`
     .curso {
        background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imagen.data.attributes.url})
     }
    `}</style>
  <div className={`contenedor ${styles.grid}`}>
   <div className='contenido'>
    <h2 className='heading'>{titulo}</h2>
    <p className={styles.texto}>{contenido}</p>
   </div>
  </div>
</section>
  )
}
