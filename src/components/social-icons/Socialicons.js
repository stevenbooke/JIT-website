import React from "react";
import "./Socialicons.css";
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
    FaKaggle,
} from "react-icons/fa6";
import { social_links } from "../../content-options";

export const Socialicons = (params) => {
    return (
        <div className="d-flex">
            {social_links.twitter && (
                <a href={social_links.twitter}>
                    <FaTwitter />
                </a>
            )}
            {social_links.XTwitter && (
                <a href={social_links.XTwitterwitter}>
                    <FaXTwitter />
                </a>
            )}
            {social_links.instagram && (
                <a href={social_links.instagram}>
                    <FaInstagram />
                </a>
            )}
            {social_links.discord && (
                <a href={social_links.discord}>
                    <FaDiscord />
                </a>
            )}
            {social_links.github && (
                <a href={social_links.github}>
                    <FaGithub />
                </a>
            )}
            {social_links.facebook && (
                <a href={social_links.facebook}>
                    <FaFacebookF />
                </a>
            )}
            {social_links.linkedin && (
                <a href={social_links.linkedin}>
                    <FaLinkedin />
                </a>
            )}
            {social_links.youtube && (
                <a href={social_links.youtube}>
                    <FaYoutube />
                </a>
            )}
            {social_links.twitch && (
                <a href={social_links.twitch}>
                    <FaTwitch />
                </a>
            )}
            {social_links.telegram && (
                <a href={social_links.telegram}>
                    <FaTelegram />
                </a>
            )}
            {social_links.reddit && (
                <a href={social_links.reddit}>
                    <FaReddit />
                </a>
            )}
            {social_links.kaggle && (
                <a href={social_links.kaggle}>
                    <FaKaggle />
                </a>
            )}
        </div>
    );
};








// import React from "react";
// import "./Socialicons.css";
// import {
//   FaGithub,
//   FaTwitter,
//   FaFacebookF,
//   FaLinkedin,
//   FaYoutube,
//   FaTwitch,
//   FaInstagram,
//   FaDiscord,
//   FaXTwitter,
//   FaTelegram,
//   FaReddit,
//   FaKaggle,
// } from "react-icons/fa6";
// import { social_links } from "../../content-options";

// export const Socialicons = (params) => {
//   return (
//     <div className="stick_follow_icon">
//       <ul>
//         {social_links.twitter && (
//           <li>
//             <a href={social_links.twitter}>
//               <FaTwitter />
//             </a>
//           </li>
//         )}
//         {social_links.twitter && (
//           <li>
//             <a href={social_links.twitter}>
//               <FaXTwitter />
//             </a>
//           </li>
//         )}
//         {social_links.instagram && (
//           <li>
//             <a href={social_links.instagram}>
//               <FaInstagram />
//             </a>
//           </li>
//         )}
//         {social_links.discord && (
//           <li>
//             <a href={social_links.discord}>
//               <FaDiscord />
//             </a>
//           </li>
//         )}
//         {social_links.github && (
//           <li>
//             <a href={social_links.github}>
//               <FaGithub />
//             </a>
//           </li>
//         )}
//         {social_links.facebook && (
//           <li>
//             <a href={social_links.facebook}>
//               <FaFacebookF />
//             </a>
//           </li>
//         )}
//         {social_links.linkedin && (
//           <li>
//             <a href={social_links.linkedin}>
//               <FaLinkedin />
//             </a>
//           </li>
//         )}
//         {social_links.youtube && (
//           <li>
//             <a href={social_links.youtube}>
//               <FaYoutube />
//             </a>
//           </li>
//         )}
//         {social_links.twitch && (
//           <li>
//             <a href={social_links.twitch}>
//               <FaTwitch />
//             </a>
//           </li>
//         )}
//         {social_links.telegram && (
//           <li>
//             <a href={social_links.telegram}>
//               <FaTelegram />
//             </a>
//           </li>
//         )}
//         {social_links.reddit && (
//           <li>
//             <a href={social_links.reddit}>
//               <FaReddit />
//             </a>
//           </li>
//         )}
//         {social_links.kaggle && (
//           <li>
//             <a href={social_links.kaggle}>
//               <FaKaggle />
//             </a>
//           </li>
//         )}
//       </ul>
//       {/* <p>Follow Me</p> */}
//     </div>
//   );
// };
