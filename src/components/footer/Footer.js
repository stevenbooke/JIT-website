import React from 'react';
import "./Footer.css";
import SvgJitWebsiteLayoutFrames6 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames6';
// import SvgJitWebsiteLayoutFrames6 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames6';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { social_links } from '../../content-options';
import { Socialicons as SocialIcons } from '../social-icons/Socialicons';
import {
    FaGithub,
    FaTwitter,
    FaFacebookF,
    FaLinkedin,
    FaYoutube,
    FaTwitch,
    FaInstagram,
    FaDiscord,
    FaXTwitter,
    FaTelegram,
    FaReddit,
    FaCopyright,
    FaRegCopyright,
} from "react-icons/fa6";



const Footer = () => {
    return (
        <div>
            <style>
            {
                `.wrap-layer {
                    position: relative;
                }
                .text-layer{
                    position: absolute;
                    width: 100%;
                    height: auto;
                    top: 0;
                    left: 0;
                }
            `}
            </style>

            <div className="wrap-layer">
                <div className="text-layer">
                    <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
                        <div className="d-flex">
                            <SocialIcons />
                        </div>
                        <p className="copyright m-0"> <FaCopyright /> <FaRegCopyright /> 2024 {/* logotext */}. All rights reserved.</p>
                    </div>
                    <div className="background-layer">
                        <SvgJitWebsiteLayoutFrames6 />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;








// const Footer = () => {
//     return (
//         <Element name="footer">
//             <section className='footer-container'>
//             <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
//                 <div className="d-flex">
//                     {/* {social_links.twitter && (
//                         <a href={social_links.twitter}>
//                             <FaTwitter />
//                         </a>
//                     )}
//                     {social_links.twitter && (
//                         <a href={social_links.twitter}>
//                             <FaXTwitter />
//                         </a>
//                     )}
//                     {social_links.instagram && (
//                         <a href={social_links.instagram}>
//                             <FaInstagram />
//                         </a>
//                     )}
//                     {social_links.discord && (
//                         <a href={social_links.discord}>
//                             <FaDiscord />
//                         </a>
//                     )}
//                     {social_links.github && (
//                         <a href={social_links.github}>
//                             <FaGithub />
//                         </a>
//                     )}
//                     {social_links.facebook && (
//                         <a href={social_links.facebook}>
//                             <FaFacebookF />
//                         </a>
//                     )}
//                     {social_links.linkedin && (
//                         <a href={social_links.linkedin}>
//                             <FaLinkedin />
//                         </a>
//                     )}
//                     {social_links.youtube && (
//                         <a href={social_links.youtube}>
//                             <FaYoutube />
//                         </a>
//                     )}
//                     {social_links.twitch && (
//                         <a href={social_links.twitch}>
//                             <FaTwitch />
//                         </a>
//                     )}
//                     {social_links.telegram && (
//                         <a href={social_links.telegram}>
//                             <FaTelegram />
//                         </a>
//                     )}
//                     {social_links.reddit && (
//                         <a href={social_links.reddit}>
//                             <FaReddit />
//                         </a>
//                     )} */}
//                     <SocialIcons />
//                 </div>
//                 <p className="copyright m-0"> <FaCopyright /> <FaRegCopyright /> 2024 {/* logotext */}. All rights reserved.</p>
//             </div>
//             </section>

//         </Element>
//     );
// };

// export default Footer;









// const Footer = () => {
//     return (
//         <Element name="footer">
//             <section className="footer-container">
//                 <SvgJitWebsiteLayoutFrames6 className="footer-background" /> {/* SVG background */}
//                 <div className="footer-content">
//                     {/* Social media icons and links here */}
//                     <p>&copy; 2024 Project Name</p>
//                 </div>
//             </section>
//         </Element>
//     );
// };

// export default Footer;