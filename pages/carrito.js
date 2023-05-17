import { useState, useEffect } from "react"
import Layout from "../components/layout"
import styles from '../styles/carrito.module.css'


export default function carrito({ carrito, actualizarCantidad, eliminarProducto }) {


    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const calculoTotal = carrito.reduce((total, guitarra)=> total + (guitarra.precio * guitarra.cantidad), 0)
        setTotal(calculoTotal)
    },[carrito])

    return (
        <Layout
            title="Carrito de compras"
        >
        <main className="contenedor">
                <h1 className="heading"> Carrito de compras </h1>
        <div className={styles.contenido}>
                    <div className={styles.carrito}>
                    <h2>Articulos: </h2>
                    {carrito?.length == 0 ? 'Carrito Vacio' : (
            carrito?.map(producto =>
                <div key={producto.id} className={styles.producto}>
                <div>
                  <img src={producto.imagen} alt={`Guitarra ${producto.nombre}`} />
                </div>
                <div>
                  <p>{producto.nombre}</p>
                  <p>Cantidad:</p>
                  <select 
                  value={producto.cantidad} 
                  className={styles.select}
                  onChange={e => actualizarCantidad({
                    cantidad: +e.target.value,
                    id: producto.id
                  })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <p className={styles.precio}>$ <span>{producto.precio}</span></p>
                  <p className={styles.subtotal}>Subtotal: $ <span>{(producto.cantidad * producto.precio).toString()}</span></p>
                </div>
                <button 
                type="button" 
                className={styles.btn_eliminar}
                onClick={()=> eliminarProducto(producto.id)}
                >
                  X</button>
              </div>
            )
          )}
        </div>
        <aside className={styles.resumen}>
          <h3>Resumen del pedido</h3>
          <p>Total a pagar: {total}$</p>
        </aside>
        </div>
            </main>

        </Layout>
    )
}
