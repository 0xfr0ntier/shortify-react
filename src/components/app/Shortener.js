import React, { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import Button from "./Button";
import FormField from "./FormField";
import Presenter from "./Presenter";

const Shortener = () => {
    const context = useContext(DataContext);
    const [urls, setURLs] = useState({});

    const handleSubmit = () => {
        fetch(`${context.serverURL}/shortlinks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                web: context.web_url,
                ios: context.ios_url,
                android: context.android_url,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                setURLs(res);
            });
    };

    return (
        <div className="flex flex-row justify-center">
            <div
                className="pa4 shadow-5 flex flex-column br4 white"
                style={{ background: "#0000ff30" }}
            >
                <div className="tc">
                    <p className="tc f2 mt0">Shortner</p>

                    <FormField
                        fieldName="Web URL"
                        onFieldChange={context.webHandler}
                    />
                    <FormField
                        fieldName="iOS URL"
                        onFieldChange={context.iosHandler}
                    />
                    <FormField
                        fieldName="Android URL"
                        onFieldChange={context.androidHandler}
                    />
                </div>
                <Button onSubmit={handleSubmit} text="Shorten" />
                <Presenter urls={urls} />
            </div>
        </div>
    );
};

export default Shortener;
