import { useState } from "react";

const useHoverTranslate = (movement = 5) => {
  const [transform, setTransform] = useState("translate(0px, 0px)");

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const moveX = mouseX > rect.width / 2 ? movement : -movement;
    const moveY = mouseY > rect.height / 2 ? movement : -movement;

    setTransform(`translate(${moveX}px, ${moveY}px)`);
  };

  const handleMouseLeave = () => {
    setTransform("translate(0px, 0px)");
  };

  return { transform, handleMouseMove, handleMouseLeave };
};

export default useHoverTranslate;
