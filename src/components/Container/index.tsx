import React from "react";

import styles from "./index.module.css";

interface IContainerProps {
  children: React.ReactNode;
}

export const Container = (props: IContainerProps) => {
  return <main className={styles.main}>{props.children}</main>;
};
