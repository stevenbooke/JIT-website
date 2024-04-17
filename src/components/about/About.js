import React from 'react';
import "./About.css";
import { Element } from 'react-scroll';
import frame3svg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-3.svg";
import { about } from '../../content-options';

const FRAME_3_WIDTH = 1920;
const FRAME_3_HEIGHT = 444;
const FRAME_3_ASPECT_RATIO = FRAME_3_HEIGHT / FRAME_3_WIDTH;

// add ratio-1x1 to container fluid, remove --bg-aspect-ratio style from container fluid, change from col to col-lg-6, add background position center to container fluid
// use align-self-{start | center | end} on columns

// MOBILE
// const About = () => {
//   return (
//     <Element name="about">
//       <div className="container-fluid g-0 ratio ratio-1x1" style={{ backgroundSize: 'cover', backgroundImage: `url(${frame3svg})`, backgroundPosition: 'center' }}>
//         <div className="row row-cols-1">
//           <div className="col">
//             <h1 className="fw-bold fs-1 text-center" >{about.aboutHeading}</h1>
//             <figure className="fw-light fs-6 text-wrap">
//               <blockquote className="blockquote">
//                 <p>{about.aboutText}</p>
//               </blockquote>
//               <figcaption className="blockquote-footer">
//                 {about.quoteSource}
//               </figcaption>
//             </figure>
//           </div>
//           <div className="col text-center">
//             <video className="border rounded jit-video" controls>
//               <source src="http://localhost:8000/JIT-promo-vid-meme-thumbnail.mp4" type="video/mp4" />
//               {/* <source src="../../assets/videos/JIT-promo-vid-meme-thumbnail.mp4" type="video/mp4" /> */}
//             </video>
//           </div>
//         </div>
//       </div>
//     </Element>
//   );
// };

// export default About;





// DESKTOP
const About = () => {
  return (
      <Element name="about">
          <div className="container-fluid g-0 ratio" style={{ backgroundSize: 'cover', backgroundImage: `url(${frame3svg})`, '--bs-aspect-ratio': `${FRAME_3_ASPECT_RATIO * 100}%` }}>
              <div className="row">
                  <div className="col-md-6 me-auto">
                      <h1 className="fw-bold fs-1" >{about.aboutHeading}</h1>
                      <figure className="fw-light fs-6 text-wrap">
                          <blockquote className="blockquote">
                              <p>{about.aboutText}</p>
                          </blockquote>
                          <figcaption className="blockquote-footer">
                              {about.quoteSource}
                          </figcaption>
                      </figure>
                  </div>
                  <div className="col-auto ms-auto align-content-center">
                      <video className="border rounded jit-video" controls>
                          <source src="http://localhost:8000/JIT-promo-vid-meme-thumbnail.mp4" type="video/mp4" />
                          {/* <source src="../../assets/videos/JIT-promo-vid-meme-thumbnail.mp4" type="video/mp4" /> */}
                      </video>
                  </div>
              </div>
          </div>
      </Element>
  );
};

export default About;





// const About = () => {
//     return (
//         <Element name="about">
//             <div className="container-fluid g-0 ratio" style={{ backgroundSize: 'cover', backgroundImage: `url(${frame3svg})`, '--bs-aspect-ratio': `${FRAME_3_ASPECT_RATIO * 100}%` }}>
//                 <div className="row">
//                     <div className="col">
//                         <h1 className="p-2 mt-auto mb-auto fw-bold fs-1" >{about.aboutHeading}</h1>
//                         <figure className="p-2 mt-auto mb-auto fw-light fs-6 text-wrap">
//                             <blockquote className="blockquote">
//                                 <p>{about.aboutText}</p>
//                             </blockquote>
//                             <figcaption className="blockquote-footer">
//                                 {about.quoteSource}
//                             </figcaption>
//                         </figure>
//                     </div>
//                     <div className="col">
//                         <video className="border rounded position-absolute top-50 end-0 translate-middle-y" controls>
//                             <source src="http://localhost:8000/JIT-promo-vid-meme-thumbnail.mp4" type="video/mp4" />
//                             {/* <source src="../../assets/videos/JIT-promo-vid-meme-thumbnail.mp4" type="video/mp4" /> */}
//                         </video>
//                     </div>
//                 </div>
//             </div>
//         </Element>
//     );
// };

// export default About;