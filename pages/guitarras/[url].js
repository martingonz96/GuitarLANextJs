import { useState } from 'react'
import Layout from '../../components/layout'
import styles from '../../styles/guitarra.module.css'


export default function Guitarra({ guitarra, agregarCarrito }) {

  const [cantidad , setCantidad] = useState(0)

  const { nombre, precio, imagen, descripcion} = guitarra[0].attributes

  const handleSubmit = e => {
    e.preventDefault()
  
    if (cantidad < 1) {
      alert("Seleccionar cantidad")
      return
    }

  const guitarraSeleccionada = {
     id: guitarra[0].id,
     imagen: imagen.data.attributes.url,
     nombre,
    precio,
    cantidad
  }

    //pasando info
    agregarCarrito(guitarraSeleccionada)

  }

  return (
    <Layout
    title= {nombre}
    >
     <div className={styles.guitarra}>
      <img src={imagen.data.attributes.url} alt={`guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3> 
        <p className={styles.resumen}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <form className={styles.formulario}
        onSubmit={handleSubmit}
          >
            <label htmlFor={styles.cantidad}>Cantidad:</label>
            <select 
            id="cantidad"
            onChange={(e) => setCantidad(+e.target.value)}>
            <option value="">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>

            <input type="submit"  value="Agregar al carrito"/>
          </form>
      </div>
    </div>
    </Layout>
    
  )
}


export async function getStaticPaths() {
  // Fetch the dynamic paths from your API or data source
  const response = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await response.json();

  // Generate an array of objects containing the `params` object for each dynamic route
  const paths = data.map(guitarra => ({
    params: { url: guitarra.attributes.url },
  }));

  console.log(paths)

  return {
    paths,
    fallback: false, // Set this to `false` if you want to return a 404 page for unmatched paths
  };
}


 export async function getStaticProps(context) {
   const { params } = context;
   const { url } = params;

   console.log(url);

     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)

     const {data: guitarra} = await respuesta.json()

    console.log(guitarra)
     return{         props: {
          guitarra         }
    } }


// export async function getServerSideProps(context) {
//   const { params } = context;
//   const { url } = params;

//   console.log(url);

//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)

//     const {data: guitarra} = await respuesta.json()


//    console.log(guitarra)

//     return{
//         props: {
//           guitarra
//         }
//     }
// }



