import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="contenedor ultima">
          <div className="siguenos">
            <p className="descripcion">Siga-nos:</p>
            <div className="social">
              <a className="button_footer" href="#!">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a className="button_footer" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="button_footer" href="#!">
                <i className="fab fa-google"></i>
              </a>
              <a className="button_footer" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="button_footer" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="contacto">
            <p className="descripcion">Contato</p>
            <div>
              <i className="fa-solid fa-house"></i>  Brasil, 20950-090 Rio de Janeiro Riachuelo, RJ
            </div>
            <div>
              <i className="fa-solid fa-phone"></i> +5521968828746
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i> MecDevs@gmail.com
            </div>
          </div>
        </div>
        <div className="ultima2">© 2023 MecDevs: FrontEnders</div>
      </footer>
    </>
  );
};

export default Footer;
