import React from "react"
import styles from "./SuperScriptText.module.scss";


const SuperScriptText = ({ mainText, supText }) => {
  return (
    <h4 style={{fontSize: mainText?.size || "7vw", color: mainText?.color || "#E7E5DF"}} className={styles.mainText}><sup style={{ fontSize: supText?.size || "7vw", color: supText?.color || "#E7E5DF",left:supText.left||"-30%" }} className={styles.supText}>{supText.text}</sup><span>{mainText.text}</span></h4>
  )
}

export default SuperScriptText