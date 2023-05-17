import ListadoDePosts from "../components/ListadoDePosts"
import Layout from "../components/layout"

export default function Blog({posts}) {

  console.log(posts)

  return (
    <Layout
    title={'Blog'}
    description={'Blog de musica y venta de guitarras'}
    >
    <main className="contenedor">
    <ListadoDePosts
    posts= {posts}
    />
    
    </main>

    </Layout>
   
  )
}

 export async function getStaticProps(){
   const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)

  const {data: posts} = await respuesta.json()
   return {     
    props: {
        posts
      }   
    } }