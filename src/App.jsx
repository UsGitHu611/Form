import React from 'react';
import * as stylex from "@stylexjs/stylex";
import {Link} from "react-router-dom";

const styles = stylex.create({
    wrapper: {
        fontFamily: "Poppins",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        justifyItems: "center",
        alignContent: "center",
        minHeight: "100vh",
        fontSize: "40px",
        backgroundColor: "#1e1e3d"
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        padding: "5px 25px",
        transition: ".5s",
        background: {
            ':hover': "#5a03fc"
        },
        borderRadius: "20px",
        boxShadow:{
            ':hover': "0 0 10px 2px #5a03fc"
        }
    }
});

const App = () => {
    return (
        <div {...stylex.props(styles.wrapper)}>

            <Link to={'/SignIn'} {...stylex.props(styles.link)}>
                Sign In
            </Link>

            <Link to={'/SignUp'} {...stylex.props(styles.link)}>
                Sign Up
            </Link>

        </div>
    );
};

export default App;
