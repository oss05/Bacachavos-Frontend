import React from 'react';

//components
import Button from '../components/Button';

//styles
import './styles/Login.css';

//assets
import Logo from '../assets/img/mi-changarro-logo.png';

export default function Login() {
    return(
        <main className="login-main">
            <section className="login-vendedor">
                <p>Mi changarro, el asistente virtual de ventas te ayuda a generar más ingresos.</p>
                <h2>¿Eres vendedor?</h2>
                <Button
                    buttonText="Registrate"
                />
            </section>
            <section className="login">
                    <h1><span>Pásele a</span><br/> mi changarro</h1>
                    <img src={Logo} alt="mi changarro logo"/>
                    <a href="">Aviso de Privacidad</a>
            </section>
        </main>
    )
}