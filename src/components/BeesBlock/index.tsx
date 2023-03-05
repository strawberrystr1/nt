import { TransitionEvent, useEffect, useState } from "react";
import { Bee } from "./Bee";
import styles from "./styles.module.scss";

export const BeesBlock = () => {
  const [isActive, setIsActive] = useState(false);
  const [transitionIndex, setTransitionIndex] = useState(0);
  const [animatedBees, setAnimatedBees] = useState([false, false, false, false]);

  const toggleHover = () => setIsActive((prev) => !prev);
  const toggleTransition = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && e.propertyName === "width") {
      setTransitionIndex((prev) => {
        return prev === 0 ? 1 : 0;
      });
    }
  };

  const handleBeesAnimated = (index: number) =>
    setAnimatedBees((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });

  return (
    <div
      className={`${styles.bees_block} ${
        transitionIndex === 0 ? styles.transition_in : styles.transition_out
      }`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onTransitionEnd={toggleTransition}
    >
      {animatedBees.map((bee, i) => (
        <Bee
          key={i}
          index={i + 1}
          isActive={isActive}
          forward={animatedBees.every((e) => !e)}
          handleBeesAnimated={handleBeesAnimated}
        />
      ))}
    </div>
  );
};
