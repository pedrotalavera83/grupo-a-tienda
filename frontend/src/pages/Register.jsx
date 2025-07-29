import React from 'react';
import { useState } from 'react';


const Register = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {

    };

  return <div>
    <h1>Register</h1>
    <form>
        <div>
            <label htmlFor="firstName">Nombre</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                placeholder="Ingresa tu nombre"
            />
        </div>
        <div>
            <label htmlFor="lastName">Apellido(s)</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                placeholder="Ingresa tu(s) apellido(s)"
            />
        </div>
        <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Ingresa tu correo electrónico"
            />
        </div>
        <div>
            <label
                htmlFor="password">Contraseña</label>
            <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                placeholder="Ingresa tu contraseña"
            />
        </div>
      <button type="submit">Registrar</button>
    </form>
  </div>;
}

export default Register