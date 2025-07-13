function WelcomeMessageOperadorTernario({ isLoggedIn }) {

    return (

        <h1>{isLoggedIn ? "Bienvenido de nuevo!" : "Por favor, inicia sesión."}</h1>

    );

}

export default WelcomeMessageOperadorTernario;