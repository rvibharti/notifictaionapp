import React, { Children } from 'react'
import styles from './button.module.css'

function Button({ children, handelClick }) {
    return (
        <button className={styles.button} onClick={handelClick} >{children}</button>
    )
}

export default Button