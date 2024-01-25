import React from 'react';
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
   defaultButton: {
        padding: "14px 0",
        border: "none",
        borderRadius: "32px",
        background: "#0C21C1",
        color: "#fff",
        cursor: "pointer",
        width: "100%"
   }
});

const Button = ({ children }) => {
    return (
        <button {...stylex.props(styles.defaultButton)}>
            {children}
        </button>
    );
};

export default Button;
