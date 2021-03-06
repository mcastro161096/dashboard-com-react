import React, {Component} from "react";
import {Link} from "react-router-dom";

class MenuSuperior extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Dash</Link>
                <button className="navbar-toggler" type="button" data-toggle="colapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-iten">
                            <Link to="/" className="nav-link">Resumo</Link>
                        </li>
                        <li className="nav-iten">
                            <Link to="/consultas" className="nav-link">Consultas</Link>
                        </li>
                        <li className="nav-iten">
                            <Link to="/faturamento" className="nav-link">Faturamento</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default MenuSuperior;