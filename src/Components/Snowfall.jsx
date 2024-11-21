import React, { useEffect } from "react";

const Snowfall = () => {
  useEffect(() => {
    const numberOfSnowflakes = 100; // Number of snowflakes
    const snowflakes = [];

    // Create snowflakes and append them to the body
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = `${Math.random() * 100}vw`;  // Randomize horizontal position
      snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;  // Randomize falling speed
      snowflake.style.fontSize = `${Math.random() * 1.5 + 1}rem`;  // Randomize snowflake size
      snowflakes.push(snowflake);
    }

    snowflakes.forEach((flake) => {
      document.body.appendChild(flake);
    });

    return () => {
      snowflakes.forEach((flake) => {
        document.body.removeChild(flake);
      });
    };
  }, []);

  return null;
};

export default Snowfall;
