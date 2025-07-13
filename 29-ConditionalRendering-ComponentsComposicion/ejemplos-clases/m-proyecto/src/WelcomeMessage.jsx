function WelcomeMessage({ isLoggedIn }) {

    if (isLoggedIn) {

        return <h1>Bienvenido de nuevo!</h1>;

    } else {

        return <h1>Por favor, inicia sesión.</h1>;

    }

}

export default WelcomeMessage