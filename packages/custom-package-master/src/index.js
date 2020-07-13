import React from 'react'
import styles from './styles.module.css'
import { ExampleComponent as Me } from 'custom-react-package'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>
    Example Component: {text}
    <Me text={"it's custom"}/>
  </div>
}
