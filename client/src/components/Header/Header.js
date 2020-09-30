import React from 'react';
import { Nav } from 'react-bootstrap';
import '../../App.css';



function Header() {




  return (

    <div className="my-header container-xl">
      <div className="row">
        <div className="col-md-11">
          <h3 style={{ color: "black" }}>Geordin Soucie</h3>
        </div>

      </div>
      
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "darkslategrey", paddingLeft: 15 + 'px' }}>



        {/* <a className="navbar-brand" href="./index.html">Home</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="https://github.com/GormTheWyrm" target="_blank" rel="noopener noreferrer">Github
                                        Profile<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://www.linkedin.com/in/geordinsoucie/"
                target="_blank" rel="noopener noreferrer">LinkedIn
                                        Profile<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white"
                href="https://gormthewyrm.github.io/react-portfolio/"
                target="_blank" rel="noopener noreferrer">Portfolio Page
                                        <span className="sr-only">(current)</span></a>

            </li>

            {/* <li className="nav-item">
                  <a className="nav-link active" href="./aboutMe.html">(About Me Working) <span
                    className="sr-only">(current)</span></a> */}

            {/* </li>
                <li>
                  <a className="nav-link" href="./resume.html">Resume
                                        <span className="sr-only">(current)</span></a>
                </li> */}

          </ul>
        </div>

      </nav>

    </div>





  )
};
export default Header;