import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect( () =>{
        fetch('http://localhost:8080/api/products', {
            headers: {
                'Authorization': localStorage.getItem('auth-token-app')
            }
        })
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            if(data.status == 401){
                navigate('/')
            }
            console.log(data)
            setProducts(data.products)
        })
    }, [])
  return (
    <div>

        <div>
        <h1>Lista de productos</h1>
        {products.length == 0 ? <h2>Cargando...</h2> : products.map(product =>
            <Product key={product.id} {...product}/>
        )}
    </div>
  )
    </div>
  )
}

export default Home

const Product = ({nombre, precio, stock, id}) =>{
    return (
        <div >
            <h2>Nombre {nombre}</h2>
            <p>Precio {precio}</p>
            <span>Stock: {stock}</span>
            <br/>
            <button>Ver Detalle </button>
        </div>
    )
}