import './Inicio.css';
import React from "react"


const Inicio = () => {
    return(
        <div>
            <h1 className="title">
                Vierne de Olga
            </h1>
            <div className="container">
                <iframe className="responsive-iframe"
                        src="https://open.spotify.com/embed/track/2iU6HB7nIR6L0CDp9tcdjU?theme=0" width="40%"
                        height="80" frameBorder="0" allowTransparency="true" allow="encrypted-media">
                </iframe>
            </div>
        </div>
    )
}
export default Inicio;