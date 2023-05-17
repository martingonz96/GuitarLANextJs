import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"


export default function Nosotros() {
  return (
    <Layout
    title={'Nosotros'}
    description={'sobre nosotros'}
    >

<main className={`contenedor ${styles.nosotros}`}>
       <h2 className="heading">Nosotros</h2>
       <div className={styles.contenido}>
       <img src='/img/nosotros.jpg' alt="imagen sobre nosotros"/>
       <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex arcu, sodales sed nulla a, aliquam volutpat magna. Maecenas vitae turpis fringilla, consequat nulla eu, fermentum ex. Nam non rutrum ipsum. Morbi pellentesque neque vel porttitor ullamcorper. Proin sed erat et velit fringilla mattis. Maecenas ultricies rhoncus arcu et iaculis. Ut aliquet arcu sed urna ultrices, vitae laoreet leo mollis. Praesent in lacus leo. Nam eget elementum est, vitae viverra risus. 
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex arcu, sodales sed nulla a, aliquam volutpat magna. Maecenas vitae turpis fringilla, consequat nulla eu, fermentum ex. Nam non rutrum ipsum. Morbi pellentesque neque vel porttitor ullamcorper. Proin sed erat et velit fringilla mattis. Maecenas ultricies rhoncus arcu et iaculis. Ut aliquet arcu sed urna ultrices, vitae laoreet leo mollis. Praesent in lacus leo. Nam eget elementum est, vitae viverra risus. </p>
       </div>
       </div>
    </main>

    </Layout>
   
  )
}
