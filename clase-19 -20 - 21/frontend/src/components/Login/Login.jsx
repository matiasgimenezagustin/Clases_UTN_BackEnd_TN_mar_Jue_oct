import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <h1>Formulario de login</h1>
        <form action="">
          <input placeholder='usuario' />
          <input placeholder='contraseña' />
          <input type='submit'/>
        </form>
        <span>Aun no tienes cuenta? <Link to={'/register'}>Click aqui</Link></span>
    </div>
  )
}

export default Login