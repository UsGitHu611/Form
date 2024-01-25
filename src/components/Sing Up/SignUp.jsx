import React from 'react';
import * as stylex from "@stylexjs/stylex";
import {Link} from "react-router-dom";
import Input from "../UI/Input/Input.jsx";
import iconMail from "../../img/iconForm/mailIcon.svg";
import iconLock from "../../img/iconForm/lockIcon.svg";
import iconUser from '../../img/iconForm/user.svg'
import Button from "../UI/Button/Button.jsx";
import image from "../../img/image.png";

const styles = stylex.create({
    layout: {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        minHeight: "900px",
        justifyItems: "center",
        position: "relative",
        fontFamily: "Poppins",
        margin: "20px"
    },
    mainTitle: {
        fontSize: "30px",
        fontWeight: "500",
        marginBottom: "22px"
    },
    formWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width:"431px",
        marginTop: "87px"
    },
    innerForm: {
        display: "flex",
        flexDirection: "column",
        gap: "45px",
        marginBottom: "95px"
    },
    imgWrapper: {
        borderRadius: "15px",
        background: "#000842",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width : "735px"
    },
    title: {
        fontSize: "40px",
        fontWeight: "600",
        marginTop: "90px"
    },
    text: {
        fontSize: "20px",
        fontWeight: "300"
    },
    logoText:{
        position: "absolute",
        left: "0",
        fontSize: "20px",
        fontWeight: "600",
        margin: "31px 0 0 42px"
    },
    info: {
        marginBottom: "42px"
    },
    link:{
        textDecoration: "none",
        color: {
            default: "#0C21C1",
            ':visited': "#0C21C1"
        },
        fontWeight: "600"
    }
});

const SignUp = () => {
    return (
        <div {...stylex.props(styles.layout)}>

            <p {...stylex.props(styles.logoText)}>
                Your Logo
            </p>

            <div {...stylex.props(styles.formWrapper)}>

                <div {...stylex.props(styles.info)}>

                    <h3 {...stylex.props(styles.mainTitle)}>
                        Sign up
                    </h3>

                    <p>
                        If you already have an account register
                    </p>

                    <p>
                        You can <Link to={'/SignIn'} {...stylex.props(styles.link)}>Login here !</Link>
                    </p>
                </div>

                <form>

                    <div {...stylex.props(styles.innerForm)}>
                        <Input
                            type={'email'}
                            placeholder={'Enter your email address'}
                            icon={iconMail}
                            label={'Email'}
                        />

                        <Input
                            type={'text'}
                            placeholder={'Enter your User name'}
                            icon={iconUser}
                            label={'Username'}
                        />

                        <Input
                            type={'password'}
                            placeholder={'Enter your Password'}
                            icon={iconLock}
                            label={'Password'}
                        />

                        <Input
                            type={'password'}
                            placeholder={'Confirm Password'}
                            icon={iconLock}
                            label={'Confirm Password'}
                        />
                    </div>

                    <Button>
                        Register
                    </Button>

                </form>

            </div>

            <div {...stylex.props(styles.imgWrapper)}>

                <div>
                    <img src={image} alt="img"/>

                    <h2 {...stylex.props(styles.title)}>
                        Sign Up to name
                    </h2>

                    <p {...stylex.props(styles.text)}>
                        Lorem Ipsum is simply
                    </p>
                </div>

            </div>

        </div>
    );
};

export default SignUp;
