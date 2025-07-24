import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <nav>

            <Link to="/">Inicio</Link>
            <hr />
            <Link to="/about">Acerca de</Link>
            <hr />
            <Link to="/user/12">Perfil Usuario</Link>
            <hr />

        </nav>

    );

}
export default Navbar;