import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../visuals/logoBlanco.png'

export const NavBar = ({history}) => {

  const backToHome = () => console.log(history)

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className="navBar__cotainer">
      <Link to="/">
        <img src={logo} alt="fmsvotacion" onClick={backToHome}/>
      </Link>
      <div className="navBar__text">
        <Link to="/" tabIndex="-1">Inicio</Link>
        <Link to="/saved-votes" tabIndex="-1">Votaciones</Link>
        <Link to="/practice" tabIndex="-1">Entrenar</Link>
        <Link to="/about" tabIndex="-1">Acerca de</Link>
      </div>
      <div className="navBar__menu">
        <FontAwesomeIcon icon={faBars} onClick={() => setOpenMenu(!openMenu)}/>
      </div>
      <div  onClick={() => setOpenMenu(!openMenu)} className={`navBar__menu-list animate__animated paused ${openMenu ? "animate__fadeInDownBig" : "animate__fadeOutUpBig"}`}>
        <Link to="/">Inicio</Link>
        <Link to="/saved-votes">Votaciones</Link>
        <Link to="/practice">Entrenar</Link>
        <Link to="/about">Acerca de</Link>
      </div>
    </nav>
  )
}
