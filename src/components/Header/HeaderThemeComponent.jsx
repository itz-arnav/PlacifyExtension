import React, { useState, useEffect, useRef } from "react";
import css from "../../styles/Header/HeaderThemeComponent.module.css";

const HeaderThemeComponent = () => {
  const [flag, setFlag] = useState(0);
  const toggleRef = useRef(null);
  const bodRef = useRef(null);
  const borderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setInitialStyles();
  }, []);

  const handleToggle = () => {
    setFlag((prevFlag) => {
      const newFlag = prevFlag === 0 ? 1 : 0;
      if (newFlag === 0) {
        performToggleOff();
      } else {
        performToggleOn();
      }
      return newFlag;
    });
  };

  function performToggleOn() {
    applyStylesForToggleOn();
  }

  function performToggleOff() {
    applyStylesForToggleOff();
  }

  function setInitialStyles() {}

  function applyStylesForToggleOn() {
    toggleRef.current.className = `${css.darksoulToggle} ${css.toggleOn}`;

    containerRef.current.style.boxShadow =
      "10px 10px 10px rgb(242, 241, 241), -4px -7px 15px rgb(242, 241, 241), 2px -5px 10px rgb(255, 255, 255) inset, -10px -1px 5px yellow inset";
    borderRef.current.style.backgroundColor = "rgb(255, 255, 255)";
    borderRef.current.style.boxShadow =
      "2px 5px 10px rgb(236, 235, 235) inset, -2px 0px 2px rgb(254, 254, 1) inset";
    bodRef.current.style.backgroundColor = "rgb(253, 253, 253)";
    setTimeout(() => {
      toggleRef.current.style.boxShadow =
        "5px 5px 500px rgb(255, 255, 0) inset, 0.5px 0.5px 50px yellow";
      toggleRef.current.style.border = "1px solid rgb(255, 255, 255)";
      toggleRef.current.style.backgroundColor = "orange";
    }, 50);
  }

  function applyStylesForToggleOff() {
    toggleRef.current.className = `${css.darksoulToggle} ${css.toggleOff}`;

    containerRef.current.style.boxShadow =
      "10px 10px 10px rgba(16, 16, 16, 0.667), 0px -8px 10px rgba(32, 32, 32, 0.453), -5px -5px 15px rgb(17, 17, 17) inset, 15px 15px 50px rgb(26, 26, 26) inset";
    borderRef.current.style.backgroundColor = "rgb(23, 23, 23)";
    borderRef.current.style.boxShadow =
      "5px 5px 10px rgb(23, 23, 23) inset, -4px -10px 10px rgb(25, 25, 25) inset";
    bodRef.current.style.backgroundColor = "rgb(23, 23, 23)";
    setTimeout(() => {
      toggleRef.current.style.boxShadow =
        "8px 8px 10px rgba(0, 0, 0, 0.3), " + // Outer dark shadow for depth
        "-4px -4px 8px rgba(30, 30, 30, 0.5), " + // Inner dark shadow for contour
        "20px -2.5px 0.5px rgb(255, 255, 255) inset, " + // Bright edge to simulate lighting
        "-1px 2.5px 5px rgba(23, 23, 23, 0.5) inset"; // Subtle inner depth      toggleRef.current.style.border = "1px solid rgba(28, 28, 28, 0)";
      toggleRef.current.style.backgroundColor = "rgb(23, 23, 23)";
    }, 50);
  }

  return (
    <div ref={bodRef} className={css.bod}>
      <div
        ref={containerRef}
        className={css.darksoulToggleContainer}
        onClick={handleToggle}
      >
        <div ref={borderRef} className={css.darksoulToggleBorder}>
          <div ref={toggleRef} className={css.darksoulToggle}></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderThemeComponent;
