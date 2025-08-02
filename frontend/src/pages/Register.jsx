import React from 'react';
import { useState } from 'react';
import { register } from '../services/auth.service';

const Register = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setIsLoading(true);
            // Call the register function from auth.service
           const response = await register(
            formData.firstName,
            formData.lastName,
            formData.email,
            formData.password
        );
            console.log(response);
            // Handle successful registration, e.g., redirect to login or show a success message    
        } catch (error) {
            console.log(error);
            // Handle error appropriately, e.g., show a message to the user
        } finally {
            setIsLoading(false);
        }
        
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
    <button onClick={handleSubmit} type="submit" disabled={isLoading}>
        Register
    </button>
    </form>
  </div>;
}

export default Register