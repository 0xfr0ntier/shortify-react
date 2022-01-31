import React from "react";

const Home = () => {
    return (
        <div className="flex flex-column tc white">
            <div className="">
                <div
                    className="dib shadow-5 mt6 pv4 ph6 br4"
                    style={{ background: "#0000ff30" }}
                >
                    <h1 className="f1">Welcome to Shortify</h1>
                    <p className="f3">Links shortenning made easy.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
