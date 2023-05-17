import Layout from "../components/layout";
import Guitarra from "../components/Guitarra";
import styles from '../styles/guitarra.module.css'

export default function Tienda({guitarras}) {
  
  return (
    <Layout title={'Tienda Virtual'} description={'Tienda online de guitarras'}>
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
    </Layout>
  );
}
 


// export async function getStaticProps(){

//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)

//   const {data: guitarras} = await respuesta.json()

//   return {
//     props: {
//        guitarras
//     }
//   }
// }


export async function getServerSideProps(){

  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)

  const {data: guitarras} = await respuesta.json()

  return {
    props: {
       guitarras
    }
  }
}