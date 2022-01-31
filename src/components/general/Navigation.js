import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/">
                <p className="mr3 f3 link dim black pa3 pointer white">Home</p>
            </Link>
            <Link to="/reveal">
                <p className="mr3 f3 link dim black pa3 pointer white">Revealer</p>
            </Link>
            <Link to="/shorten">
                <p className="mr3 f3 link dim black pa3 pointer white">
                    Shortner
                </p>
            </Link>
            <Link to="/update">
                <p className="mr3 f3 link dim black pa3 pointer white">
                    Update
                </p>
            </Link>
        </div>
    );
};

export default Navigation;
