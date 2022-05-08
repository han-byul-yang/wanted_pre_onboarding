import { useRef, useState } from "react"
import styles from './Toggle.module.scss'

export default function Toggle() {
  const targetBasic = useRef()
  const targetDetail = useRef()
  const [tabState, setTabState] = useState(targetBasic)

  const handleTabClick = (target) => {
    setTabState(target)
  }

  return (
    <div className={styles.form}>
      <div className={styles.box}>
        <div className={styles.bar} style={tabState === targetBasic ? {left: '0'} : {left: '50%'}} />
        <div className={styles.tabOne} style={tabState === targetBasic ? {color: 'black'} : {color: 'gray'}} aria-hidden ref={targetBasic} onClick={() => handleTabClick(targetBasic)}>기본</div>
        <div className={styles.tabTwo} style={tabState === targetDetail ? {color: 'black'} : {color: 'gray'}} aria-hidden ref={targetDetail} onClick={() => handleTabClick(targetDetail)}>상세</div>
      </div>
    </div>
  )
}