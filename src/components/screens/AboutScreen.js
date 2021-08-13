import React, { useEffect } from 'react'

export const AboutScreen = () => {

    useEffect(() => {
        document.title = "FMS Votación - Acerca de";
    }, []);

    return (
        <div className="about__screen">
            <div className="about__main">
                <div className="about__title">
                    <p>ACERCA DE</p>
                    <h2>FMSVOTACION.COM</h2>
                </div>
                <div className="about__info">
                    <h1>¿Como funciona?</h1>
                    <p>En el inicio de la página deberán agregar el link de la batalla o directo (Asegúrese de copiar de manera correcta el link desde la web de YouTube). Una vez en la página de votación, encontrara un menú de votación que funciona de la siguiente manera, a los lados del menú encontrara flechas para moverse entre los diferentes modos. En caso de haber una réplica seleccione el botón del mismo nombre (tenga encuentra que los resultados de esta misma son independientes al resultado total). Las puntuaciones deben tener un valor que van desde el 0 al 4 (inclusive), en caso de querer sumar un 0.5 agregue un . (punto) al número, es decir, si vota con 1. equivale a 1.5. En los minutos sangre/personajes si desea marcar una respuesta/utilización de personaje presione la tecla + (signo más/suma). Recuerde que para moverse de manera rápida en la votación debe presionar la tecla TAB.</p>
                </div>
                <div className="about__info">
                    <h1>¿Quienes somos?</h1>
                    <p>FMSVotacion.com es una pagina web desarrollada por y para los amantes de la competencia de freestyle FMS, gracias a esta aplicación web vas a poder ponerte en papel de juez y votar batallas en vivo o en el momento que lo desees desde un solo lugar, sin la necesidad de descargar aplicaciones externas o usar lápiz y papel. Si tenes alguna duda o sugerencia no dudes contactarte vía <a href="https://twitter.com/fms_votacion" target="_blank" rel="noreferrer">Twitter</a>.</p>
                </div>
                <div className="about__info">
                    <h1>Apoya a la pagina</h1>
                    <p>FMS Votacion es un pagina que no genera ingresos, por eso mismo para que la misma siga en pie, nos vemos obligados a depender de donaciones, si te gusta la pagina y deseas apoyarla, puedes hacerlo mediante <a href="https://paypal.me/fmsvotacion?locale.x=es_XC" target="_blank" rel="noreferrer">Paypal</a> o donando un <a href="https://cafecito.app/fmsvotacion#" target="_blank" rel="noreferrer">Cafecito</a> si estas en Argentina.</p>
                </div>
            </div>
            <div className="curve" style={{height: "150px", overflow: "hidden"}} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                    <path d="M-7.05,76.47 C190.46,-86.34 262.13,264.95 502.54,34.03 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none"}}/>
                </svg>
            </div>
        </div>
    )
}
