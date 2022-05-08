import { useState } from "react"
import styles from './Slider.module.scss'

export default function Slider() {
  const [percentValue, setPercentValue] = useState(1)
  const percentList = [1, 25, 50, 75, 100]

  const handlePercentChange = (e) => {
    setPercentValue(e.target.value)
  }

  const handlePercentClick = (num) => {
    setPercentValue(num)
  }

  const handleInput = () => {
      setPercentValue(percentValue)
    }

  return (
    <div className={styles.box}>
      <div className={styles.contain}>
        <div className={styles.board}>
          <span className={styles.value}>{percentValue}</span>
          <span className={styles.percentage}>%</span>
        </div>
        <div className={styles.slide} onInput={handleInput}>
          <input className={styles.range} type="range" min="1" max="100" value={percentValue} onChange={(e) => handlePercentChange(e)} />
          <div className={styles.rangeBar} />
          <div className={styles.circleLine}>
            {percentList.map((percent) => <div key={`circle-${percent}`} className={percent <= percentValue ? styles.circlePass : styles.circleUnpass} />)}
          </div>
          <div className={styles.selector} style={{left: `calc(calc(22rem / 99) * ${percentValue - 1})`}}>
            <div className={styles.moveBtn} />
          </div>
          <div className={styles.bar} style={{width: `calc(calc(22rem / 99) * ${percentValue - 1})`}} />
        </div>
        <div className={styles.percentBox}>
          {percentList.map((percent) => <button key={`button-${percent}`} className={styles.percentBtn} type='button' onClick={() => handlePercentClick(percent)}>{percent}%</button>)}
        </div>
      </div>
    </div>
  )
}