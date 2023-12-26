import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  /* const initialValues =  */
  const [formValues, setFormValues] = useState({username: '', password: ''})
  const handleChangeInput = (value, name) =>{
  
    setFormValues(() =>{
      return {...formValues, [name]: value}
    })
  }
  /* const handleSubmit = () =>{
    axios
  } */
  
  return (
    <div>
        <h1>Formulario de registro</h1>
        <form action="">
          <input placeholder='usuario' value={formValues.username}  onChange={(e) => handleChangeInput(e.target.value, 'username')} />
          {/* { formValues.username.length < 3 && <span>No puedes usar menos de 3 caracteres </span> } */}
          <input placeholder='contraseña' value={formValues.password} onChange={(e) => handleChangeInput(e.target.value, 'password')}/>
          <input type='submit'/>
        </form>
        <span>Ya tienes cuenta? <Link to={'/'}>Click aqui</Link></span>
    </div>
  )
}

export default Register