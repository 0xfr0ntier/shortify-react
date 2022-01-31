import { createContext } from "react";

const DataContext = createContext({
    slug: "",
    ios_url: "",
    android_url: "",
    web_url: "",
    serverURL: "http://127.0.0.1:5000",
    urls: [],
    setData: (d) => {},
    iosHandler: (url, setData) => {
        setData((d) => ({ ...d, ios_url: url }));
    },
    androidHandler: (url, setData) => {
        setData((d) => ({ ...d, android_url: url }));
    },
    webHandler: (url, setData) => {
        setData((d) => ({ ...d, web_url: url }));
    },
    slugHandler: (url, setData) => {
        setData((d) => ({ ...d, slug: url }));
    },
});

export default DataContext;
