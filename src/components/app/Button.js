import React from "react";

const Button = ({ onSubmit, text }) => {
    return (
        <div className="tc">
            <button
                className="w-50 ph3 pv2 f4 white br4 grow grow:hover grow:focus bg-black-50 hover-bg-purple hover-bg-purple"
                onClick={() => {
                    onSubmit();
                }}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
