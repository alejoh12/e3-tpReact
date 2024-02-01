import { useState } from "react";

const Mensaje = (props) => {
    const [frase, setFrase] = useState("");
    return (
        <section>
            <h1>Hola {props.miAmigo}{frase}!</h1>
            <button onClick={() => setFrase(" (from changed state)")}>Click me</button>
        </section>
    );
};

export default Mensaje;