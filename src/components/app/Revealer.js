import React, { useState, useEffect, useContext } from "react";
import Presenter from "./Presenter";
import DataContext from "../../context/DataContext";

const Revealer = () => {
    const { serverURL } = useContext(DataContext);
    const [urls, setURLs] = useState([]);

    useEffect(() => {
        fetch(`${serverURL}/shortlinks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => setURLs(res));
    }, [serverURL]);

    return (
        <>
            <Presenter urls={urls} />
        </>
    );
};

export default Revealer;
