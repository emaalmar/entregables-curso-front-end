import { useParams } from 'react-router-dom';

function UserProfile() {

    const { id } = useParams();

    return <h1>Perfil del usuario {id}</h1>;

}

export default UserProfile;