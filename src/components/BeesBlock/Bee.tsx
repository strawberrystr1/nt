import Image from "next/image";
import { FC, TransitionEvent } from "react";
import styles from "./styles.module.scss";

interface IProps {
  index: number;
  isActive: boolean;
  handleBeesAnimated: (i: number) => void;
  forward: boolean;
}

export const Bee: FC<IProps> = ({ index, isActive, handleBeesAnimated, forward }) => {
  const toggleTransition = (e: TransitionEvent) => {
    if (e.target === e.currentTarget && e.propertyName === "top") {
      handleBeesAnimated(index - 1);
    }
  };

  return (
    <div className={styles.bee_container}>
      <div
        className={`${forward ? styles.transition_in : styles.transition_out} ${
          isActive ? styles.active : ""
        } ${styles.bee} ${styles[`bee_${index}`]} `}
        onTransitionEnd={toggleTransition}
      >
        <Image src="/images/Bee.png" alt="bee" fill={true} />
      </div>
    </div>
  );
};
