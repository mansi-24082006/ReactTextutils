import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link" aria-current="page" href="/">Home</a> */}
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                            {/* <a className="nav-link" href="/about">About</a> */}
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-3" onClick={()=>props.toggleMode('primary')} style={{height: '30px', width:'30px',cursor:'pointer'}}></div>
                        <div className="bg-secondary rounded mx-3" onClick={()=>props.toggleMode('secondary')} style={{height: '30px', width:'30px',cursor:'pointer'}}></div>
                        <div className="bg-success rounded mx-3" onClick={()=>props.toggleMode('danger')} style={{height: '30px', width:'30px',cursor:'pointer'}}></div>
                        <div className="bg-warning rounded mx-3" onClick={()=>props.toggleMode('light')} style={{height: '30px', width:'30px',cursor:'pointer'}}></div>
                    </div>
                    <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
                        <input className="form-check-input" onClick={()=>props.toggleMode(null)} role="switch" type="checkbox" id="flexSwitchCheckDefault"checked/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Toggle Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };
