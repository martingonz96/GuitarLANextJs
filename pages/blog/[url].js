import { formatearFecha } from '../../utils/helpers'
import Layout from '../../components/layout'
import styles from '../../styles/blog.module.css'

export default function Post({post}) {

 console.log(post[0].attributes)

 const {imagen, titulo, publishedAt, contenido} = post[0].attributes

  return (
    <Layout
    title={titulo}
    >
 
 <article className={`contenedor ${styles.post} ${styles['mt-3']}`}>
    <img src={imagen.data.attributes.url} alt={`Post de ${titulo}`} />
    <div className="contenido .mt-3">
        <h2>{titulo}</h2>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.texto}>{contenido}</p>
    </div>

    </article>

    </Layout>
    
  )
}

 export async function getServerSideProps(context) {   
    const { params } = context;   
    const { url } = params;

   console.log(url);

    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)

    const {data: post} = await respuesta.json()

    console.log(post)

    return{         
        props: {           
            post        
        }     
    } }