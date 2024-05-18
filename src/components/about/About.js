import React from 'react';
import "./About.css";
import { Element } from 'react-scroll';
import frame3svg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-3.svg";
import callsvg from "../../assets/images/jit/jit-slide2-thecallpicto-white.png";
import { about, content } from '../../content-options';
import video from "../../assets/videos/JIT-promo-vid-meme-thumbnail.mp4"

const FRAME_3_WIDTH = 1920;
const FRAME_3_HEIGHT = 444;
const FRAME_3_ASPECT_RATIO = FRAME_3_HEIGHT / FRAME_3_WIDTH;

let text = about.content_1;

// DESKTOP
const About = () => {
    return (
        <Element name="about">
            <div style={{ backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundSize: 'cover', backgroundImage: `url(${frame3svg})`, minHeight: '444px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '3vh'
                }}>
                    <div className='about-text-container' >
                        <img src={callsvg} style={{
                            marginTop: '0.8em',
                            marginRight: '2.5vw' // Space between the bar and the text
                        }}></img>
                        <div style={{
                            flex: 1, // Allows the text area to fill the remaining space
                            justifyContent:'center',
                            alignItems:'left',
                            textAlign:'left',
                            display:'flex',
                            flexDirection:'column',
                            maxWidth:'420px'
                        }}>
                            <span className='about-title'>{about.title}</span>
                            <br></br>
                            <span className='about-content'>"{about.content}"</span>
                            <br></br>
                            <div style ={{display:'flex'}}> 
                            <span className='about-footer'>{about.footer} </span>
                            <span className='about-footer2'>{about.footer2}</span>
                            </div>
                        </div>
                    </div>

                </div>
                <video className="jit-video" src={video} controls />

            </div>
        </Element>
    );
};

export default About;
