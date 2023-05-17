import ListadoDePosts from "../components/ListadoDePosts"
import Guitarra from "../components/Guitarra"
import Layout from "../components/layout"
import styles from '../styles/guitarra.module.css'
import Curso from "../components/curso"



export default function Home({guitarras, posts, curso}) {

  console.log(curso.attributes)

  return (
    <Layout
    title={'Inicio'}
    description={"Venta de guitarras y mas"}
    >
     <>
    <main className="contenedor">
    <h1 className="heading">Nuestra Coleccion</h1>
        <div className={styles.guitarrasGrid}>
        {guitarras.map(guitarra=>(
         <Guitarra
         key={guitarra.id}
         guitarra={guitarra.attributes}
         /> 
        ))}
        </div>
    </main>

    <Curso
    curso={curso.attributes}
    />

    <section>
    <main className="contenedor">
    <ListadoDePosts
    posts= {posts}
    />
    </main>
    </section>

    </>
            
    </Layout>
          )
}


export async function getStaticProps() {
 // const { params } = context;
 // const { url } = params;

    const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`

    const urlPosts = `${process.env.API_URL}/posts?populate=imagen`

    const urlCurso = `${process.env.API_URL}/curso?populate=imagen`


    const [resGuitarras, resPosts, resCurso] = await Promise.all([
      fetch(urlGuitarras), 
      fetch(urlPosts),
      fetch(urlCurso)
    ])

    const [{ data: guitarras }, { data: posts }, {data : curso}] = await Promise.all([
      resGuitarras.json(),
      resPosts.json(),
      resCurso.json()
    ])

    console.log(guitarras, posts, curso)

    return{         
      props: 
      {
        guitarras,
        posts,
        curso
        }
   } }