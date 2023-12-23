import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <h1>Formulario de registro</h1>
        <form action="">
          <input placeholder='usuario' />
          <input placeholder='contraseña' />
          <input type='submit'/>
        </form>
        <span>Ya tienes cuenta? <Link to={'/'}>Click aqui</Link></span>
    </div>
  )
}

export default Register