import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

const registration = e =>{
  e.preventDefault()
  const form = e.target
  const data = {
    "email": form.email.value,
    "name": form.fullname.value,
    "password": form.password.value
  }

  Axios.post(`${process.env.REACT_APP_API_USER}/signup`,data)
    .then(()=> {
      alert('Usuario creado')
      window.location='/login'
    })
    .catch(()=>alert('error al crear usuario'))
}

const Register = () => (
  <div className="ed-grid">
  <div className="l-block"></div>
  <div className="m-to-center m-60 lg-30">
    <h1 className="center">Crear cuenta</h1>
    <form onSubmit={registration.bind()}>
      <div className="form__item">
        <label htmlFor="fullname">
          Nombre completp
          <input type="text" name="fullname" id="fullname" placeholder="Escribe tu nombre" required/>
        </label>
      </div>
      <div className="form__item">
        <label htmlFor="email">
          Correo electrónico
          <input type="email" name="email" id="email" placeholder="Escribe tu correo" autoComplete="off" required/>
        </label>
      </div>
      <div className="form__item">
        <label htmlFor="password">
          Contraseña
          <input type="password" email="password" id="password" placeholder="Escribe tu contraseña" required/>
        </label>
      </div>
      <div className="form__item">
        <input type="submit" value="Iniciar sesión" className="button full"/>
      </div>
    </form>
    <div className="center">
      <p>Ya tienes cuenta de ususario? <Link to="/login">Inicia sesión</Link></p>
    </div>
  </div>
</div>
  )


export default Register
