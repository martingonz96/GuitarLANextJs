
import styles from '../styles/guitarra.module.css'
import Link from 'next/link'


export default function Guitarra({guitarra}) {

  const {nombre, descripcion, imagen, precio, url} = guitarra

  return (
    <div className={styles.guitarra}>
      <img src={imagen.data.attributes.formats.medium.url} alt={`guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3> 
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link 
        legacyBehavior href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
            Ver Producto
          </a>
        </Link>
      </div>
    </div>
  )
}
