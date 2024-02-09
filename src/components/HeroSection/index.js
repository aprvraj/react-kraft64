import React, { useState } from "react";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroP1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import img from "../../videos/Untitled design.png"
import logo from "../../videos/KRAFT64.com.png"

import Video from "../../videos/video.mp4";

function HeroSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <img src={img} alt="alt" style={{width:"100vw", height:"100vh", overflow:"hidden"}}/>
          {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
        </HeroBg>
        <HeroContent>
          <HeroH1>Elevate Your Digital Presence!</HeroH1>
          <HeroP>
          Step into the world of unparalleled digital innovation and marketing excellence with
          </HeroP>
            <img src={logo} style={{paddingTop:"20px", width:"200px"}}/>
          <HeroP1>
          </HeroP1>
          {/* <HeroBtnWrapper>
            <Button
              to="signup"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary
              dark
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper> */}
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
