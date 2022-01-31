import React from "react";

const Presenter = ({ urls }) => {
    urls = Array.isArray(urls) ? urls : [urls];
    console.log(urls);

    return (
        <div
            className="ma3 pa4 shadow-5 flex flex-column br4 white"
            style={{ background: "#0000ff30" }}
        >
            <div className="tc f2">
                <p className="ma0 pa1">Result</p>
            </div>
            <div className="flex flex-row flex-wrap ">
                {urls.map((url, index) => {
                    return (
                        <div
                            key={index}
                            className="ma2 pa2 dib"
                            style={{ minWidth: "300px" }}
                        >
                            <div className="ba pa2 tl br3"
                            style={{ background: '#00000040' }}>
                                <p className="ma1">
                                    <span className="b">Slug</span>{" "}
                                    {url.slug ? url.slug : ""}
                                </p>
                                <p className="ma1">
                                    <span className="b">Web</span>{" "}
                                    {url.web ? url.web : ""}
                                </p>
                                <p className="ma1">
                                    <span className="b">iOS</span>{" "}
                                    {url.ios ? url.ios.primary : ""}
                                </p>
                                <p className="ma1">
                                    <span className="b">Android</span>{" "}
                                    {url.android ? url.android.primary : ""}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Presenter;
