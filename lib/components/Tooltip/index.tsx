import React from "react";

import styles from "./styles.module.scss";

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subTitles?: string[];
}

export function Tooltip(props: TooltipProps) {
  const { className, ...restProps } = props;
  return (
    <div className={`${className} ${styles.tooltip}`} {...restProps}>
      {props.title && <span className={styles.title}>{props.title}</span>}
      {props.subTitles &&
        Array.isArray(props.subTitles) &&
        props.subTitles.length > 0 && (
          <div className={styles.subTitle}>
            {props.subTitles.map((subTitle, index) => (
              <div key={index} className={styles.subTitle}>
                {subTitle}
              </div>
            ))}
          </div>
        )}
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}
