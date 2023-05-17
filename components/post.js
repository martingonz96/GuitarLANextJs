import Link from "next/link"
import styles from "../styles/blog.module.css"
import { formatearFecha } from '../utils/helpers'

export default function Post({post}) {

const {contenido , titulo, publishedAt, imagen, url} = post

  return (
    <article className={styles.post}>
    <img src={imagen.data.attributes.formats.small.url} alt={`Post de ${titulo}`} />
    <div className="contenido">
        <h2>{titulo}</h2>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link legacyBehavior href={`/blog/${url}`}>
            <a className={styles.enlace}>
            Leer post
            </a>  
        </Link>
    </div>
    </article>
  )
}
