import React from 'react';
import './styles.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Header = () => {

    return (
        <>
            <div className="header">
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <a className="navbar-brand text-white " href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

                {/* --------------------------------Navbar ends here----------------------- */}
                <section className="header-section">
                    <div className="center-div">
                        <h1>The Web Developers </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id, modi minus exercitationem cumenim.</p>
                        <div className="header-btns">
                            <a href="#">About Us</a>
                            <a href="#">Contact US</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}



export default Header;