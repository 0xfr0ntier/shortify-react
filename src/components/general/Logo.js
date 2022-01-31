import React from "react";
import { Link } from "react-router-dom";
import Tilt from "./Tilt";
import LogoImg from "./assets/logo.png";

const Logo = () => {
    let path = "/";

    return (
        <Link to={path}>
            <div className="ma2 fixed fl"
            style={{ top: '10px ', left: '10px' }}>
                <Tilt
                    className="w4 h4 br2 pa2 shadow-2"
                    style={{ background: "#323232" }}
                    options={{ max: 35 }}
                >
                    <img
                        className="Tilt-inner tc"
                        alt="Shortify"
                        src={LogoImg}
                    />
                </Tilt>
            </div>
        </Link>
    );
};

export default Logo;
