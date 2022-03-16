import './Inicio.css';
import React from "react"
import img from './img/WhatsApp Image 2022-02-17 at 9.45.37 PM.jpeg'
import FooterEnd from "./FooterEnd";
import img2 from './img/lospi.jpeg'

const Inicio = () => {
    return(
        <div>
            <h1 className="title">
                <span>V</span>
                <span>I</span>
                <span>E</span>
                <span>R</span>
                <span>N</span>
                <span>E</span>
            </h1>
            <h2 className="title">
                <span>D</span>
                <span>e</span>
            </h2>
            <h1 className="title">
                <span>O</span>
                <span>L</span>
                <span>G</span>
                <span>A</span>

            </h1>
            <div className="border-vid">
                <iframe className="video-container"
                        width="1060" height="615" src="https://www.youtube.com/embed/v2IJ9dHTuE0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className="container">
                <iframe src="https://open.spotify.com/embed/artist/528XLyzYsJVE8jAN9mipVn?theme=0" width="35%"
                        height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media">
                </iframe>
            </div>
            <div>
                <a  target="_blank"
                    href="https://www.youtube.com/channel/UCkA6gOdoTDMxuprRp5vKRSQ">
                    <img src={img} className='imgRedonda'/>
                </a>
                <a  target="_blank"
                    href="https://www.youtube.com/channel/UCkA6gOdoTDMxuprRp5vKRSQ">
                    <p className="title3">TUCUMANEADO</p>
                    <p className="title2">FULL ALBUM</p>
                    <p className="title4">escuchalo aca!</p>
                </a>
            </div>
            <div>
                <div className="fondo-negro">
                </div>
                <h1 className="title5">Sobre nosotros:</h1>
                <p className="title6">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.</p>
                <h2 className="title7">Integrantes:</h2>
                <p className="sabadini">Daniel Sabadini: Guitarra, Voz(Rojas,Buenos Aires)</p>
                <p className="armendares">Martin Armendares: Guitarra Principal(Colon,Buenos Aires)</p>
                <p className="peirone">Joaquin Peirone: Bajo, Sintetizadores(Rojas,Buenos Aires)</p>
                <p className="canale">Juancho Canales: Bateria, Coros(Piamonte,Santa Fe)</p>
                <a target="_blank"
                   href="#">
                    <img src={img2} className="imagen"/>
                </a>
                <div className="fecha">
                    {/*<h2 className="text-color">Fechas:</h2>*/}
                </div>
            </div>
            <FooterEnd/>
        </div>
    )
}
export default Inicio;