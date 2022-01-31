import React, { useContext } from "react";
import DataContext from "../../context/DataContext";

const FormField = ({ fieldName, onFieldChange }) => {
    const { setData } = useContext(DataContext);

    return (
        <div className="mb3">
            <p className="mb1 tl f4">{fieldName}</p>

            <input
                className="pr2 f4 w-100"
                type="tex"
                onChange={(e) => {
                    onFieldChange(e.target.value, setData);
                }}
            />
        </div>
    );
};

export default FormField;
