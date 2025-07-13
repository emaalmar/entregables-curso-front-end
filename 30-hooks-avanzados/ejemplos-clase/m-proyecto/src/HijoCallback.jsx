function HijoCallback({ onClick }) {

    console.log('Hijo renderizado');

    return <button onClick={onClick}>Click</button>;

}

export default HijoCallback;