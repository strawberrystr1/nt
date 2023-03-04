import React, { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface IProps {
  children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
