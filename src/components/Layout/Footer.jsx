import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
    const { isAuthorized } = useContext(Context);
    return (
        <footer className={isAuthorized ? "footerShow" : "footerHide"}>
            <div>&copy; All Rights Are Reserved.</div>
            <div>
                <Link to={'https://www.facebook.com/profile.php?id=100076299549116&mibextid=ZbWKwL'} target="_blank"><FaFacebookF /></Link>
                {/* <Link to={'/'} target="_blank"><FaYoutube /></Link> */}
                <Link to={'https://www.linkedin.com/in/vamshi-krishna-janampelly-0b5546219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target="_blank"><FaLinkedin /></Link>
                <Link to={'https://www.instagram.com/__vamshi_k?igsh=MTQzNXBuMGxmazRtZQ=='} target="_blank"><RiInstagramFill /></Link>

            </div>

        </footer>
    );
};

export default Footer;