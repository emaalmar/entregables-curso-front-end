function NotificationOperadorLogicoAmp({ hasNewMessages }) {

    return (

        <div>

            <h1>Bienvenido, probando operaro logio &&</h1>

            {hasNewMessages && <p>Tienes nuevos mensajes.</p>}

        </div>

    );

}

export default NotificationOperadorLogicoAmp;