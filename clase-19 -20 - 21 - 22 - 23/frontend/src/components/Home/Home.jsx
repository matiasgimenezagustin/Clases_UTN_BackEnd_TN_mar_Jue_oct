import React, { useEffect } from 'react'

const Home = () => {
    useEffect( () =>{
        fetch('http://localhost:8080/api/products')
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            console.log(data)
        })
    }, [])
  return (
    <div>
        <h1>Lista de productos</h1>
    </div>
  )
}

export default Home