import React from "react";
import Particles from "react-tsparticles";
import deer from "./small-deer.2a0425af.svg";

function Canvas(props) {
  const lineColor = props.mainColor;
  return (
    <Particles
      params={{
        fps_limit: 20,
        particles: {
          number: {
            value: 200,
            density: {
              enable: false,
            },
          },
          color: lineColor,
          line_linked: {
            enable: true,
            distance: 30,
            opacity: 0.4,
            color: lineColor,
          },
          move: {
            speed: 1,
          },
          opacity: {
            anim: {
              enable: true,
              opacity_min: 0.05,
              speed: 2,
              sync: false,
            },
            value: 0.4,
          },
        },
        polygon: {
          enable: true,
          scale: 0.5,
          type: "inline",
          move: {
            radius: 10,
          },
          url: deer,
          inline: {
            arrangement: "equidistant",
          },
          draw: {
            enable: true,
            stroke: {
              color: lineColor,
            },
          },
        },
        retina_detect: false,
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              size: 10,
              distance: 40,
            },
          },
        },
      }}
    />
  );
}

export default Canvas;
