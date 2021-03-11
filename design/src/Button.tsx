import React from 'react'
import styles from './Button.module.css'

export interface ButtonProps {
  isCool?: boolean;
  [prop: string]: any; // yikes
}

export function Button(props: ButtonProps) {
  const { isCool = false, ...restProps } = props;
  return <button className={styles.Button} style={{ textTransform: isCool ? 'uppercase' : 'none' }} type="button" {...restProps} />;
}