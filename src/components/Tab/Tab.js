import { useState } from "react"
import styles from './Tab.module.scss'
import classnames from "classnames"

export default function Tab() {
  const [select, setSelect] = useState(0)
  const tabList = ['감자', '고구마', '카레라이스']

  const handleTabClick = (id) => {
    setSelect(id)
  }

  return (
    <div className={styles.box}>
      <div className={styles.tabs}>
        {tabList.map((word, id) => <div key={`tab-${word}`} className={classnames(styles.tab, {[styles.act] : select ===  id})} aria-hidden='true' onClick={() => handleTabClick(id)}>{word}</div>)}
      </div>
      <div className={styles.slide}>
        <div className={classnames(styles.bar, {[styles.barfirst] : select === 0, [styles.barsecond] : select === 1, [styles.barthird] : select === 2 })} idx={select} />
      </div>
    </div>
  )
}