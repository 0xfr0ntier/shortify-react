import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// General components
import Home from "./components/general/Home";
import Logo from "./components/general/Logo.js";
import Navigation from "./components/general/Navigation";

// App
import DataContext from "./context/DataContext";
import Shortener from "./components/app/Shortener";
import Updater from "./components/app/Updater";
import Revealer from "./components/app/Revealer";

// CSS
import "tachyons";
import "./App.css";
import Particles from "react-tsparticles";

const particlesOptions = {
    fpsLimit: 30,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 1080,
            },
            value: 40,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
};

const App = () => {
    const context = useContext(DataContext);
    const [data, setData] = useState(context);

    return (
        <DataContext.Provider value={{ ...data, setData }}>
            <Router>
                <div>
                    <Particles
                        className="particles"
                        id="tsparticles"
                        options={particlesOptions}
                    />
                    <Navigation />
                    <Logo />

                    <Routes>
                        <Route path="/" element={<Home />} exact />
                        <Route path="/reveal" element={<Revealer />} exact />
                        <Route path="/shorten" element={<Shortener />} exact />
                        <Route path="/update" element={<Updater />} exact />
                    </Routes>
                </div>
            </Router>
        </DataContext.Provider>
    );
};

export default App;
