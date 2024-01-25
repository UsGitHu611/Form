import React from 'react';
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({

    wrapperInput: {
        maxWidth:"429px",
        borderBottom: {
            default: "2px solid #999",
            ":hover": "2px solid #000842"
        },
        transition: ".7s",
        height: "64px"
    },
    inputBox: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "11px",
        padding: "0 0 9px 0"
    },
    customInput: {
        border: "none",
        outline: "none",
        width: "100%",
        color: {
            '::placeholder': "#000842"
        },
        fontSize: {
            '::placeholder': "16px"
        },
        fontFamily: "Poppins"
    },
    type:{
        color: "#999",
        fontSize: "13px",
        fontWeight: "500"
    }
});

const Input = ({ type, placeholder, icon, label }) => {
    return (
        <div {...stylex.props(styles.wrapperInput)}>

            <span {...stylex.props(styles.type)}>
                {label}
            </span>

            <div {...stylex.props(styles.inputBox)}>
                <img
                    src={icon}
                    alt="icon"
                />
                <input
                    type={type}
                    placeholder={placeholder}
                    {...stylex.props(styles.customInput)}
                />
            </div>
        </div>
    );
};

export default Input;
