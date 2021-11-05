import React, { Component } from "react";
import Particles from "react-tsparticles";

export class Dots extends Component {
  render() {
    const color = this.props.mainColor;
    return (
      <div>
        <Particles
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
          params={{
            particles: {
              number: {
                value: 170,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              color: color,
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                random: true,
                speed: 0.5,
                direction: "top",
                out_mode: "out",
              },
              opacity: {
                anim: {
                  enable: true,
                  opacity_min: 0.05,
                  speed: 1,
                  sync: false,
                },
                value: 0.4,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 100,
                  duration: 2,
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Dots;
